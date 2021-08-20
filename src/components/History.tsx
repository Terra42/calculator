import styled from 'styled-components';
import { IResult } from '../App';

type HistoryProps = {
  results: IResult[];
};

const Container = styled.div`
  flex-basis: 50%;
`;

const Divider = styled.div`
  height: 1px;
  background-color: lightgrey;
  margin: 20px 0;
`;

const History = ({ results }: HistoryProps) => {
  const renderHistory = (results: IResult[]): JSX.Element[] => {
    let resultsArray = results.slice(-10);
    return resultsArray.map((result) => {
      return (
        <p key={result.id}>
          {result.input1} {result.operator} {result.input2} = {result.result}
        </p>
      );
    });
  };

  return (
    <Container>
      <h4>Historie</h4>
      <Divider />
      {renderHistory(results)}
    </Container>
  );
};

export default History;
