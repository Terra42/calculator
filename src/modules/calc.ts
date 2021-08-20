export const Calc = (input1: number, input2: number, operator: string) => {
  switch (operator) {
    case '+':
      return input1 + input2;
    case '-':
      return input1 - input2;
    case '*':
      return input1 * input2;
    case '/':
      return input1 / input2;
  }
};
