// modules
import React, { useContext, useState } from "react";
import styled from "styled-components";

// context
import { ctx } from "../pages/main";

// components
import { H2 } from "../atoms/headline";
import { TextBox, TextArea } from "../atoms/fields";
import { Button } from "../atoms/button";
import { DeleteBtn } from "../atoms/deleteBtn";

//constants
import colors from "../../constants/colors";
import btnSize from "../../constants/btnSize";

interface DiaryEditProps {
  className?: string;
}

export const DiaryEdit: React.FC<DiaryEditProps> = () => {
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
  const [ titleError, setTitleError ] = useState(false);
  const [ bodyError, setBodyError ] = useState(false);
  const [ deleteBtnDisabled ] = useState(diaryTitle === "" && diaryBody === "");

  const handleTitle = (e: any) => {
    setDiaryTitle(e.target.value);
    setTitleError(false);
  };

  const handleBody = (e: any) => {
    setDiaryBody(e.target.value);
    setBodyError(false);
  };

  const defaultConfirm = () => {
    setConfirm({
      active: false,
      message: "",
      apllyBtnText: "",
      apllyBtnColor: "",
      apllyBtnFunc: () => {},
      cancelBtnText: "",
      cancelBtnColor: "",
    });
  };

  const handleDelete = () => {
    setDiaryEdit(false);
    setConfirm({
      active: true,
      message: `${year}年${month}月${date}日の日記を削除してよろしいですか？`,
      apllyBtnText: "削除する",
      apllyBtnColor: colors.DANGER,
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
                setModal(false);
                setDiaryTitle("");
                setDiaryBody("");
                defaultConfirm();
              },
            });
          } else {
            console.error("エラーが発生しました。");
          }
        });
      },
      cancelBtnText: "キャンセル",
      cancelBtnColor: colors.PRIMARY,
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
      <StyledDiv>
        <H2>{`${month}月${date}日の日記`}</H2>
        <DeleteBtn
          onClick={handleDelete}
          disabled={deleteBtnDisabled}
        />
      </StyledDiv>
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

const StyledDiv = styled.div`
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;