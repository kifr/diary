// modules
import React from 'react';
import styled from 'styled-components';

export const DayOfTheWeek: React.FC = () => {
  return (
    <StyledUl>
      <StyledLi color={'red'}>Sun.</StyledLi>
      <StyledLi>Mon.</StyledLi>
      <StyledLi>Tue.</StyledLi>
      <StyledLi>Wed.</StyledLi>
      <StyledLi>Thu.</StyledLi>
      <StyledLi>Fri.</StyledLi>
      <StyledLi color={'blue'}>Sat.</StyledLi>
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledLi = styled.li<{ color?: string; }>`
  width: calc(100% / 7);
  padding: 15px 0;
  color: ${props => props.color ? props.color : 'inherit'}
`;