// modules
import React, { useContext } from "react";
import styled from "styled-components";

// contexts
import { ctx } from "../pages/main";

interface ModalWrapperType {
  children: JSX.Element;
  onClick: () => void;
}

export const ModalWrapper: React.FC<ModalWrapperType> = props => {
  const { setModal, setDiaryTitle, setDiaryBody } = useContext(ctx);

  const handleStatus = () => {
    document.body.classList.remove("modal-open");
    setModal(false);
    setDiaryTitle("");
    setDiaryBody("");
  };

  return (
    <StyledDiv onClick={() => handleStatus()}>
      {props.children}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;