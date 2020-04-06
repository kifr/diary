// modules
import React, { useContext } from 'react';
import styled from 'styled-components';

// context
import { ctx } from '../pages/top';

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
  let { displayDate } = useContext(ctx);
  displayDate = `${displayDate.replace('-', '月')}日の日記`;

  return (
    <>
      <H2>{displayDate}</H2>
      <form>
        <TextBox name={'title'} placeholder={'タイトル'} />
        <TextArea name={'body'} placeholder={'記事'}/>
        <Button type={'submit'} color={colors.WHITE} bgColor={colors.PRIMARY} size={btnSize.xlg}>保存する</Button>
      </form>
    </>
  );
};