// modules
import React, { useContext } from "react";

// context
import { ctx } from "../pages/main";

// components
import { ModalWrapper } from "../atoms/modalWrapper";
import { DiaryEdit } from "./diaryEdit";
import { Confirm } from "./confirm";

export const ModalContents: React.FC = () => {
  const {
    modal,
    setModal,
    diaryEdit,
    setDiaryTitle,
    setDiaryBody,
    confirm,
  } = useContext(ctx);

  const handleStates = () => {
    setDiaryTitle("");
    setDiaryBody("");
    setModal(false);
  };

  if (modal && diaryEdit) {
    return (
      <ModalWrapper
        backgroundWidth={75}
        onClick={handleStates}
      >
        <DiaryEdit />
      </ModalWrapper>
    );
  } else if (modal && confirm.active) {
    return (
      <ModalWrapper
        backgroundWidth={50}
        onClick={handleStates}
      >
        <Confirm />
      </ModalWrapper>
    );
  }

  return <></>;
};