// modules
import React from 'react';
import styled from 'styled-components';

interface H1Type {
  children: string;
  className?: string;
}

export const H2: React.FC<H1Type> = props => {
  return (
    <StyledH1 className={props.className}>{props.children}</StyledH1>
  );
};

const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;