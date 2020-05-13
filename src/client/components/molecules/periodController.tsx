// modules
import React from "react";
import styled from "styled-components";

// components
import { Period } from "../atoms/period";
import { SwitchBtn } from "../atoms/switchBtn";

export const PeriodController: React.FC = () => {
  return (
    <StyledSection>
      <SwitchBtn switchTo="prev" />
      <Period />
      <SwitchBtn switchTo="next" />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
`;