// modules
import React from 'react';
import styled from 'styled-components';

// components
import { PeriodController } from '../molecules/periodController';
import { DayOfTheWeek } from '../atoms/dayOfTheWeek';
import { Days } from '../molecules/days';
import { DiaryEdit } from '../atoms/diaryEdit';

export const Calendar: React.FC = () => {
  return (
    <StyledSection>
      <PeriodController />
      <DayOfTheWeek />
      <Days />
      <DiaryEdit />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: center;
`;