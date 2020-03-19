// modules
import React from 'react';
import styled from 'styled-components';

// component
import { Day } from '../atoms/day';

interface dayType {
  month: string;
  date: number;
  isFirstDate: boolean
  isCrrMonth: boolean;
  title: string;
  body: string;
}

enum Month {
  'Jan.',
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
  const dt = new Date();
  const year = dt.getFullYear();
  const month = dt.getMonth() - 1;
  const dates = (new Date(year, month + 1, 0)).getDate();
  const startDay = (new Date(year, month).getDay());

  const createDayObj = (RequestMonth: number, RequestDate: number): dayType => {

    // TODO: implement fetch functions;

    // TODO: enumの範疇を超えた場合にundefinedになる問題を解決
    let tarMonth: number;
    if (Month[RequestMonth] === undefined && RequestMonth === -1) tarMonth = 11;
    else if (Month[RequestMonth] === undefined && RequestMonth === 1) tarMonth = 1;
    else tarMonth = RequestMonth;

    const day = {
      month: Month[tarMonth],
      date: RequestDate,
      isFirstDate: RequestDate === 1 ? true : false,
      isCrrMonth: RequestMonth === month ? true : false,
      title: 'aaaa', // fetch via API
      body: 'bbbb' // fetch via API
    }

    return day;
  }

  const calendar: dayType[] = [];
  let index = 0;

  // prev month
  const prevMonthDates = (new Date(year, month, 0).getDate());
  const prevMonthStartDate = prevMonthDates - (startDay - 1);
  for (let i = 0; i < startDay; i++) {
    calendar[index] = createDayObj(month - 1, prevMonthStartDate + i);
    index++;
  }

  // crr month
  for (let i = 1; i <= dates; i++) {
    calendar[index] = createDayObj(month, i);
    index++;
  }

  // next month
  let crrMonthWeeks = Math.ceil((startDay + dates) / 7);
  let restDays = crrMonthWeeks * 7 - calendar.length;
  for (let i = 1; i <= restDays; i++) {
    calendar[index] = createDayObj(month + 1, i);
    index++;
  }

  console.log('カレンダー作成が実行されました。');


  return (
    <>
      {month + 1} / {year}
      <StyledUl>
        {
          calendar.map((day, i) => {
            if (i === 0) day.isFirstDate = true;
            return (
              <Day key={i}
                month={day.month}
                date={day.date}
                isFirstDate={day.isFirstDate}
                isCrrMonth={day.isCrrMonth}
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