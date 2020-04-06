// modules
import React, { useContext } from 'react';
import styled from 'styled-components';

// context
import { ctx } from '../pages/top';

//constants
import colors from '../../constants/colors';

interface PeriodType {
  value: string,
  label: string,
  year: number,
  month: number,
  isDiary: boolean
}

const fetchResult: number[] = [
  12019,
  32019,
  52019,
  12020,
  22020,
  32020
]; // fetch via API

const checkIsDiary = (targetValue: number): boolean => {
  return fetchResult.some((value) => {
    return value === targetValue;
  });
}

export const Period = () => {
  const { displayPeriod, setDisplayPeriod, thisYear, thisMonth } = useContext(ctx);
  const { displayMonth, displayYear } = displayPeriod;

  let targetMonth = displayMonth;
  const initialMonth = displayMonth;
  let targetYear = displayYear;
  const initialYear = displayYear;
  let reverse = false;
  let periods: PeriodType[] = [];
  for (let i = 0; i < 12; i++) {
    periods.push({
      value: `${targetMonth}-${targetYear}`,
      label: `${targetMonth} / ${targetYear}`,
      month: targetMonth,
      year: targetYear,
      isDiary: checkIsDiary(Number(`${targetMonth}${targetYear}`))
    });

    if (
      reverse === false && (
        (targetYear === thisYear && targetMonth === thisMonth)
        || i === 5
      )
    ) {
      reverse = true;
      targetMonth = initialMonth;
      targetYear = initialYear;
    }

    if (!reverse) {
      targetMonth++;
      if (targetMonth === 13) {
        targetMonth = 1;
        targetYear++;
      }
    } else {
      targetMonth--;
      if (targetMonth === 0) {
        targetMonth = 12;
        targetYear--;
      }
    }
  }

  periods.sort((a: PeriodType, b: PeriodType): number => {
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else if (a.month > b.month) return 1;
    else if (a.month < b.month) return -1;
    else return 0;
  });

  const handleValue = (value: any) => {
    const { year, month }: any = periods.find(period => period.value === value);
    setDisplayPeriod({
      displayMonth: month,
      displayYear: year
    });
  }

  return (
    <StyledSelect
      id="period-select"
      value={`${displayMonth}-${displayYear}`}
      onChange={e => handleValue(e.target.value)}
    >
      {
        periods.map((period, i) => {
          return (
            <option key={i} value={period.value}>{period.label}</option>
          )
        })
      }
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  border: none;
  color: ${colors.PRIMARY};
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              3px 3px 5px rgba(0, 0, 0, 0.1);
  background: ${colors.BACKGROUND};
  width: 10rem;
  height: 2.5rem;
  font-size: 1.2rem;
  text-indent: 0.5rem;
  outline: none;
`;