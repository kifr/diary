// modules
import React, { useContext } from 'react';
import styled from 'styled-components';

// component
import { Day } from '../atoms/day';

// context
import { ctx } from '../pages/main';

interface DaysType {
  month: number;
  isCrrMonth: boolean;
  date: number;
  isFirstDate: boolean;
  isToday: boolean;
  title: string;
}

export const Days:React.FC = () => {
  const { displayPeriod, thisYear, thisMonth } = useContext(ctx);
  const { displayMonth, displayYear } = displayPeriod;
  const startDay = (new Date(displayYear, displayMonth - 1).getDay());
  const crrMonthDates = (new Date(displayYear, displayMonth, 0)).getDate();
  const crrMonthWeeks = Math.ceil((startDay + crrMonthDates) / 7);
  const thisDate = (new Date()).getDate();

  const createDayObj = (RequestMonth: number, RequestDate: number): DaysType => {

    // Adjust month number whithin 1 ~ 12
    let targetMonth: number;
    if (RequestMonth === 0) targetMonth = 12;
    else if (RequestMonth === 13) targetMonth = 1;
    else targetMonth = RequestMonth;

    const day = {
      month: targetMonth,
      isCrrMonth: RequestMonth === displayMonth ? true : false,
      isFirstDate: RequestDate === 1 || dates.length === 0 ? true : false,
      date: RequestDate,
      isToday: RequestDate === thisDate && targetMonth === thisMonth && displayYear === thisYear ? true : false,
      title: 'aaaa', // fetch via API
    }

    return day;
  };

  const dates: DaysType[] = [];
  let index = 0;

  // prev month
  const prevMonthDates = (new Date(displayYear, displayMonth - 1, 0).getDate());
  const prevMonthStartDate = prevMonthDates - (startDay - 1);
  for (let i = 0; i < startDay; i++) {
    dates[index] = createDayObj(displayMonth - 1, prevMonthStartDate + i);
    index++;
  }

  // crr month
  for (let i = 1; i <= crrMonthDates; i++) {
    dates[index] = createDayObj(displayMonth, i);
    index++;
  }

  // next month
  let remainingDays = crrMonthWeeks * 7 - dates.length;
  for (let i = 1; i <= remainingDays; i++) {
    dates[index] = createDayObj(displayMonth + 1, i);
    index++;
  }

  return (
    <StyledUl>
      {
        dates.map((day: DaysType, i: number) => (
          <Day key={i}
            month={day.month}
            isCrrMonth={day.isCrrMonth}
            date={day.date}
            isFirstDate={day.isFirstDate}
            isToday={day.isToday}
            title={day.title}
          />
        ))
      }
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;