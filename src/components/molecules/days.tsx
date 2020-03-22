// modules
import React, { useContext } from 'react';
import styled from 'styled-components';

// component
import { Day } from '../atoms/day';

// context
import { ctx } from '../pages/top';

interface dayType {
  month: string;
  isdisplayMonth: boolean;
  date: number;
  isFirstDay: boolean
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

export const Days = () => {
  const { displayPeriod, thisYear, thisMonth, today } = useContext(ctx);
  const { displayMonth, displayYear } = displayPeriod;
  const displayDates = (new Date(displayYear, displayMonth, 0)).getDate();
  const startDay = (new Date(displayYear, displayMonth - 1).getDay());

  const createDayObj = (RequestMonth: number, RequestDate: number): dayType => {

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
      isdisplayMonth: RequestMonth === displayMonth ? true : false,
      isFirstDay: RequestDate === 1 ? true : false,
      date: RequestDate,
      isToday,
      title: 'aaaa', // fetch via API
      body: 'bbbb' // fetch via API
    }

    return day;
  }

  const calendar: dayType[] = [];
  let index = 0;
  // prev month
  const prevMonthDates = (new Date(displayYear, displayMonth - 1, 0).getDate());
  const prevMonthStartDate = prevMonthDates - (startDay - 1);
  for (let i = 0; i < startDay; i++) {
    calendar[index] = createDayObj(displayMonth - 1, prevMonthStartDate + i);
    index++;
  }

  // crr month
  for (let i = 1; i <= displayDates; i++) {
    calendar[index] = createDayObj(displayMonth, i);
    index++;
  }

  // next month
  let displayMonthWeeks = Math.ceil((startDay + displayDates) / 7);
  let restDays = displayMonthWeeks * 7 - calendar.length;
  for (let i = 1; i <= restDays; i++) {
    calendar[index] = createDayObj(displayMonth + 1, i);
    index++;
  }

  return (
    <>
      <StyledUl>
        {
          calendar.map((day, i) => {
            if (i === 0) day.isFirstDay = true;
            return (
              <Day key={i}
                month={day.month}
                isdisplayMonth={day.isdisplayMonth}
                date={day.date}
                isFirstDay={day.isFirstDay}
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