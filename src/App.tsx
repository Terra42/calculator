import styled from 'styled-components';
import Calculator from './components/Calculator';
import History from './components/History';
import { useState } from 'react';
import { useEffect } from 'react';

export interface IResult {
  input1: number;
  operator: string;
  input2: number;
  result: string;
  id: number;
}

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: #ffffff;
  width: 50rem;
  display: flex;
`;

const App = () => {
  const [result, setResult] = useState<IResult | null>(null);
  const [results, setResults] = useState<IResult[]>([]);

  const handleResults = (
    input1: number,
    operator: string,
    input2: number,
    result: string,
  ) => {
    let newResult: IResult = {
      input1: input1,
      operator: operator,
      input2: input2,
      result: result,
      id: Math.random(),
    };
    setResult(newResult);
  };

  useEffect(() => {
    if (result !== null) {
      setResults((results) => [...results, result]);
    }
  }, [result]);

  return (
    <Container>
      <Content>
        <Calculator onCalc={handleResults} />
        <History results={results} />
      </Content>
    </Container>
  );
};

export default App;
