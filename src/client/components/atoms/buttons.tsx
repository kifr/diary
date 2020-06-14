// modules
import React, { useContext } from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";

// context
import { ctx } from "../pages/main";

//constants
import colors from "../../constants/colors";
import btnSize from "../../constants/btnSize";

/*———————————–———————————–
  Button
——————————————————————––*/

interface ButtonType {
  type: "button" | "submit" | "reset";
  children: string;
  color?: string;
  bgColor?: string;
  size?: string;
  shadowRgba?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonType> = props => {
  // HEX to RGB
  let shadowRgba = colors.WHITE;
  if (props.bgColor) {
    let hexArr = (props.bgColor.slice(1)).match(/.{2}/g);
    if (hexArr && hexArr.length === 3) {
      let rgbArr:number[] = [];
      hexArr.map((color: string):void => {
        rgbArr.push(parseInt(color, 16) - 13 < 0 ? 0 : parseInt(color, 16) - 13);
      });
      shadowRgba = `rgba(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]}, 1)`;
    }
  }

  return (
    <StyledButton
      type={props.type}
      color={props.color}
      bgColor={props.bgColor}
      size={props.size}
      shadowRgba={shadowRgba}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ bgColor?: string; size?: string; shadowRgba: string; }>`
  color: ${props => props.color ? props.color : colors.NORMAL_FONT};
  background-color: ${props => props.bgColor ? props.bgColor : colors.BACKGROUND};
  padding: 12px;
  width: ${props => props.size ? props.size : btnSize.default};
  border-radius: 10px;
  font-size: 1rem;
  margin: 10px 0;
  cursor: pointer;
  border: none;
  box-shadow: -2px -2px 5px ${colors.WHITE},
              3px 3px 5px ${colors.OBJECT_SHADOW};
  outline: none;
  &:active,
  &:disabled {
    box-shadow: inset -2px -2px 5px ${props => props.shadowRgba},
                inset 3px 3px 5px ${colors.OBJECT_SHADOW};
    cursor: initial;
  }
`;


/*———————————–———————————–
  CircleBtn
———————————————————–———–*/

interface CircleBtnType {
  className: string;
  iconClassName: string;
  iconColor: string;
  disabledIconColor: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const CircleBtn: React.FC<CircleBtnType> = props => (
  <StyledCircleButton
    className={props.className}
    onClick={props.onClick}
    disabled={props.disabled}
    iconColor={props.iconColor}
    disabledIconColor={props.disabledIconColor}
  >
    <i className={props.iconClassName}></i>
  </StyledCircleButton>
);

const StyledCircleButton = styled.button<{ iconColor?: string; disabledIconColor?: string }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  border: none;
  color: ${props => props.iconColor ? props.iconColor : colors.PRIMARY};
  box-shadow: -2px -2px 5px ${colors.WHITE},
              3px 3px 5px ${colors.OBJECT_SHADOW};
  background: ${colors.BACKGROUND};
  outline: none;
  &:active,
  &:disabled {
    box-shadow: inset -2px -2px 5px ${colors.WHITE},
                inset 3px 3px 5px ${colors.OBJECT_SHADOW};
    color: ${props => props.disabledIconColor ? props.disabledIconColor : colors.PRIMARY_DISABLED};
    cursor: initial;
  }
`;


/*———————————–———————————–
  SwitchBtn
  for priodController
———————————–———————————–*/

interface SwitchBtnType {
  switchTo: "prev" | "next";
}

export const SwitchBtn: React.FC<SwitchBtnType> = props => {
  const { displayPeriod, setDisplayPeriod, thisYear, thisMonth } = useContext(ctx);
  const { displayMonth, displayYear } = displayPeriod;

  const disabled = props.switchTo === "next" && displayMonth === thisMonth && displayYear === thisYear ? true : false;

  const handleSwitch = () => {
    if (props.switchTo === "prev") {
      if (displayMonth === 1) {
        setDisplayPeriod({
          displayYear: displayYear - 1,
          displayMonth: 12
        });
      } else {
        setDisplayPeriod({
          displayYear,
          displayMonth: displayMonth - 1
        });
      }
    } else {
      if (displayMonth === 12) {
        setDisplayPeriod({
          displayYear: displayYear + 1,
          displayMonth: 1
        });
      } else {
        setDisplayPeriod({
          displayYear,
          displayMonth: displayMonth + 1
        });
      }
    }
  };

  return (
    <StyledCircleButton
      onClick={handleSwitch}
      disabled={disabled}
    >
      <i className={props.switchTo === "prev" ? "fas fa-chevron-left" : "fas fa-chevron-right"}></i>
    </StyledCircleButton>
  );
};