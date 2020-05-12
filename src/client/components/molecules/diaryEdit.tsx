// modules
import React, { useContext, useState } from "react";

// context
import { ctx } from "../pages/main";

// components
import { H2 } from "../atoms/headline";
import { TextBox, TextArea } from "../atoms/fields";
import { Button } from "../atoms/button";

//constants
import colors from "../../constants/colors";
import btnSize from "../../constants/btnSize";

interface DiaryEditProps {
  className?: string;
}

export const DiaryEdit: React.FC<DiaryEditProps> = () => {
  const { setModal, editingDate, diaryTitle, setDiaryTitle, diaryBody, setDiaryBody } = useContext(ctx);
  const { year, month, date } = editingDate;
  const [ titleError, setTitleError ] = useState(false);
  const [ bodyError, setBodyError ] = useState(false);

  const handleTitle = (e: any) => {
    setDiaryTitle(e.target.value);
    setTitleError(false);
  };

  const handleBody = (e: any) => {
    setDiaryBody(e.target.value);
    setBodyError(false);
  };

  const postContents = () => {
    let error = false;

    if (!diaryTitle) {
      setTitleError(true);
      error = true;
    } else {
      setTitleError(false);
    }

    if (!diaryBody) {
      setBodyError(true);
      error = true;
    } else {
      setBodyError(false);
    }

    if (error) return false;

    let data = {
      date: `${year}-${month}-${date}`,
      title: diaryTitle,
      body: diaryBody
    };

    fetch("/api/createDiary", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.text())
    .then(text => {
      document.body.classList.remove("modal-open");
      setModal(false);
      setDiaryTitle("");
      setDiaryBody("");

      console.info(text);
    });
  };

  return (
    <>
      <H2>{`${month}月${date}日の日記`}</H2>
      <TextBox
        name={"title"}
        placeholder={"タイトル"}
        onChange={(e:any) => handleTitle(e)}
        value={diaryTitle}
        error={titleError}
      />
      <TextArea
        name={"body"}
        placeholder={"記事"}
        onChange={(e:any) => handleBody(e)}
        value={diaryBody}
        error={bodyError}
      />
      <Button
        type={"button"}
        color={colors.WHITE}
        bgColor={colors.PRIMARY}
        size={btnSize.xlg}
        onClick={postContents}
      >保存する</Button>
    </>
  );
};