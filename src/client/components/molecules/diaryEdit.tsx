// modules
import React, { useContext } from 'react';

// context
import { ctx } from '../pages/main';

// components
import { H2 } from '../atoms/headline';
import { TextBox, TextArea } from '../atoms/fields';
import { Button } from '../atoms/button';

//constants
import colors from '../../constants/colors';
import btnSize from '../../constants/btnSize';

interface DiaryEditProps {
  className?: string;
}

export const DiaryEdit: React.FC<DiaryEditProps> = () => {
  const { setModal, editingDate, diaryTitle, setDiaryTitle, diaryBody, setDiaryBody } = useContext(ctx);

  const postContents = () => {
    if (!diaryTitle) {
      console.info('タイトルを入力してください');
      return false;
    }
    if (!diaryBody) {
      console.info('記事を入力してください');
      return false;
    }

    const data = {
      date: editingDate,
      title: diaryTitle,
      body: diaryBody
    }

    fetch('/api/createDiary', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.text())
    .then(text => console.info(text))
    .catch(err => console.error(err))
    .finally(() => {
      setDiaryTitle('');
      setDiaryBody('');
      setModal(false);
    });
  };

  return (
    <>
      <H2>{`${editingDate.month}月${editingDate.date}日の日記`}</H2>
      <TextBox
        name={'title'}
        placeholder={'タイトル'}
        onChange={(e:any) => setDiaryTitle(e.target.value)}
        value={diaryTitle}
      />
      <TextArea
        name={'body'}
        placeholder={'記事'}
        onChange={(e:any) => setDiaryBody(e.target.value)}
        value={diaryBody}
      />
      <Button
        type={'button'}
        color={colors.WHITE}
        bgColor={colors.PRIMARY}
        size={btnSize.xlg}
        onClick={postContents}
      >保存する</Button>
    </>
  );
};