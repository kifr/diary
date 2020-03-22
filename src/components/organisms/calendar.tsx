// modules
import React from 'react';
import styled from 'styled-components';

// components
import { PeriodController } from '../molecules/periodController';
import { DayOfTheWeek } from '../atoms/dayOfTheWeek';
import { Days } from '../molecules/days';

export const Calendar: React.FC = () => {
  return (
    <StyledSection>
      <PeriodController />
      <DayOfTheWeek />
      <Days />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: center;
`;