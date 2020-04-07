// module
import React, { useState } from 'react';

// component
import { Calendar } from '../organisms/calendar';
import { ModalContents } from '../molecules/modalContents';

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
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [diaryTitle, setDiaryTitle] = useState('');
  const [diaryBody, setDiaryBody] = useState('');
  ctx.displayPeriod = displayPeriod;
  ctx.setDisplayPeriod = setDisplayPeriod;
  ctx.displayDate = displayDate;
  ctx.setDisplayDate = setDisplayDate;
  ctx.thisYear = thisYear;
  ctx.thisMonth = thisMonth;
  ctx.today = today;
  ctx.modal = modal;
  ctx.setModal = setModal;
  ctx.editing = editing;
  ctx.setEditing = setEditing;
  ctx.diaryTitle = diaryTitle;
  ctx.setDiaryTitle = setDiaryTitle;
  ctx.diaryBody = diaryBody;
  ctx.setDiaryBody = setDiaryBody;

  return (
    <ctx.Provider value={ctx}>
      <Calendar />
      <ModalContents />
    </ctx.Provider>
  );
};