// modules
import React from 'react';
import styled from 'styled-components';

//constants
import colors from '../../constants/colors';
import btnSize from '../../constants/btnSize';

interface ButtonType {
  type: 'button' | 'submit' | 'reset';
  children: string;
  color?: string;
  bgColor?: string;
  size?: string;
  shadowRgba?: string;
  onClick?: any;
}

export const Button: React.FC<ButtonType> = props => {
  // HEX to RGB
  let shadowRgba = 'rgba(255, 255, 255, 1)';
  if (props.bgColor) {
    let hexArr = (props.bgColor.slice(1)).match(/.{2}/g);
    if (hexArr && hexArr.length === 3) {
      let rgbArr:number[] = [];
      hexArr.map((color: string):void => {
        rgbArr.push(parseInt(color, 16) - 13 < 0 ? 0 : parseInt(color, 16) - 13)
      });
      shadowRgba = `rgba(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]}, 1)`;
    }
  }

  const handleClick = (e: React.SyntheticEvent<any, Event>) => {
    if (!props.onClick) {
      e.preventDefault();
      return false;
    }

    props.onClick(e);
  };

  return (
    <StyledButton
      type={props.type}
      color={props.color}
      bgColor={props.bgColor}
      size={props.size}
      shadowRgba={shadowRgba}
      onClick={handleClick}
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
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              3px 3px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  &:active,
  &:disabled {
    box-shadow: inset -2px -2px 5px ${props => props.shadowRgba},
                inset 3px 3px 5px rgba(0, 0, 0, 0.1);
    cursor: initial;
  }
`;