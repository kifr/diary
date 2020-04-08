// modules
import React, { useContext, useState } from 'react';
import styled from 'styled-components';

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
  const { editingDate } = useContext(ctx);
  const [diaryTitle, setDiaryTitle] = useState('');
  const [diaryBody, setDiaryBody] = useState('');

  const postContents = () => {
    if (!diaryTitle) {
      console.info('タイトルを入力してください');
      return false;
    }
    if (!diaryBody) {
      console.info('記事を入力してください');
      return false;
    }

    let data = {
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
    .then(text => console.info(text));
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