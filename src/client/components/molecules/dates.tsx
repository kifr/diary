// modules
import React, { useContext } from 'react';
import styled from 'styled-components';

// component
import { Day } from '../atoms/date';

// context
import { ctx } from '../pages/top';

interface datesType {
  month: string;
  isDisplayMonth: boolean;
  date: number;
  isFirstDate: boolean
  isToday: boolean;
  title: string;
  body: string;
}

enum Month {
  'Jan.' = 1,
  'Feb.',
  'Mar.',
  'Apr.',
  'May.',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.'
}

export const Dates = () => {
  const { displayPeriod, thisYear, thisMonth, today } = useContext(ctx);
  const { displayMonth, displayYear } = displayPeriod;
  const displayDates = (new Date(displayYear, displayMonth, 0)).getDate();
  const startDay = (new Date(displayYear, displayMonth - 1).getDay());

  const createDayObj = (RequestMonth: number, RequestDate: number): datesType => {

    // TODO: implement fetch functions;

    // TODO: enumの範疇を超えた場合にundefinedになる問題を解決
    let targetMonth: number;
    if (RequestMonth === 0) targetMonth = 12;
    else if (RequestMonth === 13) targetMonth = 1;
    else targetMonth = RequestMonth;

    let isToday: boolean = false;
    if (thisYear === displayYear && thisMonth === displayMonth && RequestDate === today) {
      isToday = true
    }

    const day = {
      month: Month[targetMonth],
      isDisplayMonth: RequestMonth === displayMonth ? true : false,
      isFirstDate: RequestDate === 1 ? true : false,
      date: RequestDate,
      isToday,
      title: 'aaaa', // fetch via API
      body: 'bbbb' // fetch via API
    }

    return day;
  }

  const dates: datesType[] = [];
  let index = 0;
  // prev month
  const prevMonthDates = (new Date(displayYear, displayMonth - 1, 0).getDate());
  const prevMonthStartDate = prevMonthDates - (startDay - 1);
  for (let i = 0; i < startDay; i++) {
    dates[index] = createDayObj(displayMonth - 1, prevMonthStartDate + i);
    index++;
  }

  // crr month
  for (let i = 1; i <= displayDates; i++) {
    dates[index] = createDayObj(displayMonth, i);
    index++;
  }

  // next month
  let displayMonthWeeks = Math.ceil((startDay + displayDates) / 7);
  let restDays = displayMonthWeeks * 7 - dates.length;
  for (let i = 1; i <= restDays; i++) {
    dates[index] = createDayObj(displayMonth + 1, i);
    index++;
  }

  return (
    <>
      <StyledUl>
        {
          dates.map((day, i) => {
            if (i === 0) day.isFirstDate = true;
            return (
              <Day key={i}
                month={day.month}
                isDisplayMonth={day.isDisplayMonth}
                date={day.date}
                isFirstDate={day.isFirstDate}
                isToday={day.isToday}
                title={day.title}
                body={day.body}
              />
            )
          })
        }
      </StyledUl>
    </>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;