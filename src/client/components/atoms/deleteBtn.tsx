// modules
import React from "react";
import styled from "styled-components";

// constants
import colors from "../../constants/colors";

interface DeleteBtnType {
  disabled?: boolean;
  onClick?: () => void;
}

export const DeleteBtn: React.FC<DeleteBtnType> = props => {
  return (
    <StyledDeleteBtn onClick={props.onClick} disabled={props.disabled}>
      <i className="fas fa-trash"></i>
    </StyledDeleteBtn>
  );
};

const StyledDeleteBtn = styled.button`
  border-radius: 35px;
  width: 40px;
  height: 40px;
  font-size: 16px;
  border: none;
  color: ${colors.DANGER};
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              3px 3px 5px rgba(0, 0, 0, 0.1);
  background: ${colors.BACKGROUND};
  outline: none;
  cursor: pointer;
  &:active,
  &:disabled {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1),
                inset 3px 3px 5px rgba(0, 0, 0, 0.1);
    color: ${colors.DANGER_DISABLED};
    cursor: initial;
  }
  .fa-trash {
    position: relative;
    top: 1px;
  }
`;