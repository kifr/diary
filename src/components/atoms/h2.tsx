// modules
import React from 'react';
import styled from 'styled-components';

interface H2Type {
  children: string;
  className?: string;
}

export const H2: React.FC<H2Type> = props => {
  return (
    <StyledH2 className={props.className}>{props.children}</StyledH2>
  );
};

const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`;