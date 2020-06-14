// modules
import React, { useContext,  useEffect, useState } from "react";
import styled from "styled-components";

// context
import { ctx } from "../pages/main";

// components
import { H2, H3 } from "../atoms/headline";
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
  const [browseMode, setBrowseMode] = useState(diaryTitle !== "" && diaryBody !== "");
  const [browseBtnDisabled, setBrowseBtnDisabled] = useState(true);
  const [deleteBtnDisabled] = useState(diaryTitle === "" && diaryBody === "");

  useEffect(() => {
    if (diaryTitle !== "" || diaryBody !== "") setBrowseBtnDisabled(false);
    else setBrowseBtnDisabled(true);
  });

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiaryTitle(e.currentTarget.value);
    setTitleError(false);
  };

  const handleBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDiaryBody(e.currentTarget.value);
    setBodyError(false);
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

  if (browseMode) {
    return (
      <>
        <StyledTitleArea>
          <H2>{`${month}月${date}日の日記`}</H2>
          <StyledButtonArea>
            <CircleBtn
              key={"fa-pen"}
              className={"option-buttons"}
              iconClassName={"fas fa-pen"}
              iconColor={colors.PRIMARY}
              disabledIconColor={colors.PRIMARY_DISABLED}
              onClick={() => setBrowseMode(!browseMode)}
              disabled={browseBtnDisabled}
            />
            <CircleBtn
              className={"option-buttons"}
              iconClassName={"fas fa-trash"}
              iconColor={colors.DANGER}
              disabledIconColor={colors.DANGER_DISABLED}
              onClick={handleDelete}
              disabled={deleteBtnDisabled}
            />
          </StyledButtonArea>
        </StyledTitleArea>
        <H3>{diaryTitle}</H3>
        <StyledDiv>
          {diaryBody.split("\n").map((string: string, i:number) => (
            string === "" ? <br key={i} /> : <p key={i}>{string}</p>
          ))}
        </StyledDiv>
      </>
    );
  } else {
    return (
      <>
        <StyledTitleArea>
          <H2>{`${month}月${date}日の日記`}</H2>
          <StyledButtonArea>
            <CircleBtn
              key={"fa-book-open"}
              className={"option-buttons"}
              iconClassName={"fas fa-book-open"}
              iconColor={colors.PRIMARY}
              disabledIconColor={colors.PRIMARY_DISABLED}
              onClick={() => setBrowseMode(!browseMode)}
              disabled={browseBtnDisabled}
            />
            <CircleBtn
              className={"option-buttons"}
              iconClassName={"fas fa-trash"}
              iconColor={colors.DANGER}
              disabledIconColor={colors.DANGER_DISABLED}
              onClick={handleDelete}
              disabled={deleteBtnDisabled}
            />
          </StyledButtonArea>
        </StyledTitleArea>
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
  }
};

const StyledTitleArea = styled.div`
  position: relative;
`;

const StyledButtonArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  .option-buttons {
    margin: 0 5px;
  }
`;

const StyledDiv = styled.div`
  text-align: left;
`;