// modules
import React, { useContext } from 'react';
import styled from 'styled-components';

// context
import { ctx } from '../pages/main';

interface ModalWrapperType {
  children: JSX.Element;
}

export const ModalWrapper: React.FC<ModalWrapperType> = props => {
  const { setModal } = useContext(ctx);

  return (
    <StyledDiv onClick={() => setModal(false)}>
      {props.children}
    </StyledDiv>
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