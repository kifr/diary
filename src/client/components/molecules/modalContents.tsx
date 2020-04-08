// modules
import React, { useContext } from 'react';
import styled from 'styled-components';

// context
import { ctx } from '../pages/main';

// components
import { ModalWrapper } from '../atoms/modalWrapper';
import { DiaryEdit } from './diaryEdit';

//constants
import colors from '../../constants/colors';

export const ModalContents: React.FC = () => {
  const { modal } = useContext(ctx);

  return (
    <>
      {modal &&
        <ModalWrapper>
          <StyledSection onClick={(e) => e.stopPropagation()}>
            <DiaryEdit className="modalContent" />
          </StyledSection>
        </ModalWrapper>
      }
    </>
  );
};

const StyledSection = styled.section`
  background: ${colors.BACKGROUND};
  width: 75%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 10px;
`;