import styled from 'styled-components';
import { MouseEvent, useState, useEffect } from 'react';
import { Calc } from '../modules/calc';
import Button from '../components/Button';

type CalculatorProps = {
  onCalc: (
    input1: number,
    operator: string,
    input2: number,
    result: string,
  ) => void;
};

const Container = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const Display = styled.div`
  width: 100%;
  border: 3px solid black;
  min-height: 40px;
  background-color: #d5eebb;
  margin-bottom: 20px;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  border-radius: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(25% - 15px));
  grid-template-rows: repeat(5, 40px);
  column-gap: 20px;
  row-gap: 5px;
`;

const Calculator = ({ onCalc }: CalculatorProps) => {
  const [input1, setInput1] = useState<number>(0);
  const [operator, setOperator] = useState<string>('');
  const [input2, setInput2] = useState<number>(0);
  const [inputReady, setInputReady] = useState<Boolean>(false);
  const [result, setResult] = useState<string>('');
  const [displayValues, setDisplayValues] = useState<string[]>([]);
  const operators = ['+', '-', '*', '/'];

  const displayValue = (event: MouseEvent) => {
    let value = event.currentTarget.innerHTML;
    setDisplayValues((values) => [...values, value]);
  };

  const clearAll = () => {
    setDisplayValues([]);
  };

  const processArray = (values: Array<string>) => {
    let operatorIndex = 0;
    for (let i = 0; i < operators.length; i++) {
      operatorIndex = values.indexOf(operators[i]);
      if (operatorIndex === -1) {
        continue;
      } else {
        break;
      }
    }
    let input1 = Number(values.slice(0, operatorIndex).join(''));
    setInput1(input1);
    let operator = values[operatorIndex];
    setOperator(operator);
    let input2 = Number(
      values.slice(operatorIndex + 1, values.length).join(''),
    );
    setInput2(input2);
    setInputReady(true);
  };

  useEffect(() => {
    if (inputReady) {
      let calculatedResult = Calc(input1, input2, operator);
      let parsedResult = String(calculatedResult);
      setDisplayValues([parsedResult]);
      setResult(parsedResult);
      setInputReady(false);
    }
  }, [inputReady, input1, input2, operator]);

  useEffect(() => {
    if (result !== '') {
      onCalc(input1, operator, input2, result);
    }
  }, [result]);

  return (
    <Container>
      <Display>{displayValues}</Display>
      <Grid>
        <Button label="1" onClick={displayValue} />
        <Button label="2" onClick={displayValue} />
        <Button label="3" onClick={displayValue} />
        <Button label="4" onClick={displayValue} />
        <Button label="5" onClick={displayValue} />
        <Button label="6" onClick={displayValue} />
        <Button label="7" onClick={displayValue} />
        <Button label="8" onClick={displayValue} />
        <Button label="9" onClick={displayValue} />
        <Button label="0" onClick={displayValue} />
        <Button label="." onClick={displayValue} />
        <Button label="C" color="#51C2D5" onClick={clearAll} />
        <Button
          label="+"
          position={[5, 4]}
          color="#23689B"
          onClick={displayValue}
        />
        <Button
          label="-"
          position={[5, 3]}
          color="#23689B"
          onClick={displayValue}
        />
        <Button
          label="*"
          position={[5, 2]}
          color="#23689B"
          onClick={displayValue}
        />
        <Button
          label="/"
          position={[5, 1]}
          color="#23689B"
          onClick={displayValue}
        />
        <Button
          label="Spočítat"
          width={4}
          color="#EC4646"
          onClick={() => processArray(displayValues)}
        />
      </Grid>
    </Container>
  );
};

export default Calculator;
