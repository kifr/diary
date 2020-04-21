// modules
import React from 'react';
import styled from 'styled-components';

interface ModalWrapperType {
  children: JSX.Element;
  onClick: () => void;
}

export const ModalWrapper: React.FC<ModalWrapperType> = props => (
  <StyledDiv onClick={props.onClick}>
    {props.children}
  </StyledDiv>
);

const StyledDiv = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;