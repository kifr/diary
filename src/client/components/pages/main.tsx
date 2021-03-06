// module
import React, { useState } from "react";

// component
import { Calendar } from "../organisms/calendar";
import { ModalContents } from "../molecules/modalContents";

export let ctx: any = React.createContext({});

const dt = new Date();
const displayYear = dt.getFullYear();
const displayMonth = dt.getMonth() + 1;

export const Main: React.FC = () => {
  const [displayPeriod, setDisplayPeriod] = useState({ displayYear, displayMonth });
  const [modal, setModal] = useState(false);
  const [editingDate, setEditingDate] = useState({
    year: "",
    month: "",
    date: ""
  });
  const [diaryTitle, setDiaryTitle] = useState("");
  const [diaryBody, setDiaryBody] = useState("");

  ctx.thisYear = displayYear;
  ctx.thisMonth = displayMonth;
  ctx.displayPeriod = displayPeriod;
  ctx.setDisplayPeriod = setDisplayPeriod;
  ctx.modal = modal;
  ctx.setModal = setModal;
  ctx.editingDate = editingDate;
  ctx.setEditingDate = setEditingDate;
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