// modules
import React from 'react';
import styled from 'styled-components';

// components
import { DayOfTheWeek } from '../atoms/dayOfTheWeek';
import { PeriodController } from '../molecules/periodController';
import { Days } from '../molecules/days';

export const Calendar: React.FC = () => {
  return (
    <StyledCalendar>
      <PeriodController />
      <StyledSection>
        <DayOfTheWeek />
        <Days />
      </StyledSection>
    </StyledCalendar>
  );
};

const StyledCalendar = styled.section`
  text-align: center;
`;

const StyledSection = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              3px 3px 5px rgba(0, 0, 0, 0.1);
`;