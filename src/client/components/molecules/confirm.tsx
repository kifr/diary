// modules
import React, { useContext } from "react";
import styled from "styled-components";

// component
import { Button } from "../atoms/button";

// context
import { ctx } from "../pages/main";

export const Confirm: React.FC = () => {
  const { confirm, setConfirm } = useContext(ctx);

  const handleCancel = () => {
    confirm.cancelBtnFunc();

    setConfirm({
      active: false,
      message: "",
      apllyBtnText: "",
      apllyBtnColor: "",
      cancelBtnText: "",
      cancelBtnColor: "",
      apllyBtnFunc: () => {},
      cancelBtnFunc: () => {},
    });
  };

  return (
    <>
      <p>{ confirm.message }</p>
      <StyledDiv>
        {confirm.cancelBtnText &&
          <Button
            type="button"
            color={confirm.cancelBtnColor}
            onClick={handleCancel}
          >{ confirm.cancelBtnText }</Button>
        }
        <Button
          type="button"
          color={confirm.apllyBtnColor}
          onClick={confirm.apllyBtnFunc}
        >{ confirm.apllyBtnText }</Button>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;