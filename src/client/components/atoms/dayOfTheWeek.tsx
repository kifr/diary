// modules
import React from "react";
import styled from "styled-components";

// constant
import colors from "../../constants/colors";

export const DayOfTheWeek: React.FC = () => (
  <StyledUl>
    <StyledLi color={colors.DANGER}>Sun.</StyledLi>
    <StyledLi>Mon.</StyledLi>
    <StyledLi>Tue.</StyledLi>
    <StyledLi>Wed.</StyledLi>
    <StyledLi>Thu.</StyledLi>
    <StyledLi>Fri.</StyledLi>
    <StyledLi color={colors.BLUE}>Sat.</StyledLi>
  </StyledUl>
);

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledLi = styled.li<{ color?: string; }>`
  width: calc(100% / 7);
  padding: 15px 0;
  color: ${props => props.color ? props.color : "inherit"};
  user-select: none;
`;