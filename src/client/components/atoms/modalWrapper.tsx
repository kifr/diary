// modules
import React, { useContext } from "react";
import styled from "styled-components";

// contexts
import { ctx } from "../pages/main";

// constant
import colors from "../../constants/colors";

interface ModalWrapperType {
  children: JSX.Element;
  backgroundWidth: number;
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
    <StyledWrapper onClick={() => handleStatus()}>
      <StyledBackground
        backgroundWidth={props.backgroundWidth}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </StyledBackground>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background: ${colors.MODAL_WRAPPER};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledBackground = styled.div<{ backgroundWidth: number }>`
  background: ${colors.BACKGROUND};
  width: ${props => props.backgroundWidth}%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 10px;
`;