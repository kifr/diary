// modules
import React from 'react';
import styled from 'styled-components';

interface HeadlineType {
  children: string;
  className?: string;
}

export const H1: React.FC<HeadlineType> = props => {
  return <StyledH1 className={props.className}>{props.children}</StyledH1>;
};

const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1.2rem;
`;

export const H2: React.FC<HeadlineType> = props => {
  return <StyledH2 className={props.className}>{props.children}</StyledH2>;
};

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;