// modules
import React, { useContext, useState } from "react";
import styled from "styled-components";

// context
import { ctx } from "../pages/main";

// components
import { H2 } from "../atoms/headline";
import { TextBox, TextArea } from "../atoms/fields";
import { Button } from "../atoms/buttons";
import { CircleBtn } from "../atoms/buttons";

//constants
import colors from "../../constants/colors";
import btnSize from "../../constants/btnSize";

interface DiaryEditType {
  className?: string;
}

export const DiaryEdit: React.FC<DiaryEditType> = () => {
  const {
    setModal,
    setDiaryEdit,
    editingDate,
    diaryTitle,
    setDiaryTitle,
    diaryBody,
    setDiaryBody,
    setConfirm,
  } = useContext(ctx);
  const { year, month, date } = editingDate;
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [deleteBtnDisabled] = useState(diaryTitle === "" && diaryBody === "");

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiaryTitle(e.currentTarget.value);
    setTitleError(false);
  };

  const handleBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDiaryBody(e.currentTarget.value);
    setBodyError(false);
  };

  const defaultConfirm = () => {
    setConfirm({
      active: false,
      message: "",
      apllyBtnText: "",
      apllyBtnColor: "",
      cancelBtnText: "",
      cancelBtnColor: "",
      apllyBtnFunc: () => {},
      cancelBtnFunc: () => {},
    });
  };

  const handleDelete = () => {
    setDiaryEdit(false);
    setConfirm({
      active: true,
      message: `${year}年${month}月${date}日の日記を削除してよろしいですか？`,
      apllyBtnText: "削除する",
      apllyBtnColor: colors.DANGER,
      cancelBtnText: "キャンセル",
      cancelBtnColor: colors.PRIMARY,
      apllyBtnFunc: () => {
        fetch(`/api/deleteDiary/${year}-${month}-${date}`, {
          method: "POST"
        })
        .then(res => {
          if (res.status === 200) {
            setConfirm({
              active: true,
              message: "日記を削除しました。",
              apllyBtnText: "閉じる",
              apllyBtnColor: colors.PRIMARY,
              apllyBtnFunc: () => {
                document.body.classList.remove("modal-open");
                setModal(false);
                setDiaryTitle("");
                setDiaryBody("");
                defaultConfirm();
              },
            });
          } else {
            setConfirm({
              active: true,
              message: "日記を削除できませんでした。",
              apllyBtnText: "編集画面に戻る",
              apllyBtnColor: colors.PRIMARY,
              apllyBtnFunc: () => {
                defaultConfirm();
                setDiaryEdit(true);
              },
            });
          }
        });
      },
      cancelBtnFunc: () => {
        defaultConfirm();
        setDiaryEdit(true);
      },
    });
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

    const data = {
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
    .then(() => {
      setConfirm({
        active: true,
        message: "日記を保存しました。",
        apllyBtnText: "閉じる",
        apllyBtnColor: colors.PRIMARY,
        apllyBtnFunc: () => {
          document.body.classList.remove("modal-open");
          setModal(false);
          setDiaryTitle("");
          setDiaryBody("");
          defaultConfirm();
        },
      });
      setDiaryEdit(false);
      setDiaryTitle("");
      setDiaryBody("");
    });
  };

  return (
    <>
      <StyledDiv>
        <H2>{`${month}月${date}日の日記`}</H2>
        <CircleBtn
          className={"fas fa-trash"}
          iconColor={colors.DANGER}
          disabledIconColor={colors.DANGER_DISABLED}
          onClick={handleDelete}
          disabled={deleteBtnDisabled}
        />
      </StyledDiv>
      <TextBox
        name={"title"}
        placeholder={"タイトル"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTitle(e)}
        value={diaryTitle}
        error={titleError}
      />
      <TextArea
        name={"body"}
        placeholder={"記事"}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleBody(e)}
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

const StyledDiv = styled.div`
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;