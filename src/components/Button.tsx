import React, { MouseEvent } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string;
  position?: [x: number, y: number];
  width?: number;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

const Button = ({ label, position, width, color, onClick }: ButtonProps) => {
  const styles: React.CSSProperties = {};
  if (position) {
    styles.gridColumnEnd = position[0];
    styles.gridRowStart = position[1];
  }
  if (width) {
    styles.gridColumnStart = `span ${width}`;
  }
  if (color) {
    styles.backgroundColor = color;
    styles.color = '#FFFFFF';
    styles.border = 'none';
  }

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <StyledButton style={styles} onClick={handleOnClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
