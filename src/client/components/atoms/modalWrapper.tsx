// modules
import React, { useContext } from 'react';
import styled from 'styled-components';

// context
import { ctx } from '../pages/top';

interface ModalWrapperType {
  children: JSX.Element;
}

export const ModalWrapper: React.FC<ModalWrapperType> = props => {
  const { setModal, setEditing } = useContext(ctx);

  const handleModal = () => {
    setModal(false);
    setEditing(false);
  }

  return (
    <>
      <StyledDiv onClick={handleModal}>
        {props.children}
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;