// module
import React, { useState } from 'react';

// component
import { Calendar } from '../organisms/calendar';

export const ctx: any = React.createContext({});
const dt = new Date();
const displayYear = dt.getFullYear()
const thisYear = dt.getFullYear()
const displayMonth = dt.getMonth() + 1;
const thisMonth = dt.getMonth() + 1;
const today = (new Date()).getDate();

export const Top = () => {
  const [displayPeriod, setDisplayPeriod] = useState({ displayMonth, displayYear });
  const [displayDate, setDisplayDate] = useState('');
  const [editOpen, setEditOpen] = useState(false);
  ctx.displayPeriod = displayPeriod;
  ctx.setDisplayPeriod = setDisplayPeriod;
  ctx.displayDate = displayDate;
  ctx.setDisplayDate = setDisplayDate;
  ctx.thisYear = thisYear;
  ctx.thisMonth = thisMonth;
  ctx.today = today;
  ctx.editOpen = editOpen;
  ctx.setEditOpen = setEditOpen;

  return (
    <ctx.Provider value={ctx}>
      <Calendar />
    </ctx.Provider>
  );
};