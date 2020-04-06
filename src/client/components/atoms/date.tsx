// modules
import React, { useContext } from 'react';
import styled from 'styled-components';

// context
import { ctx } from '../pages/top';

//constants
import colors from '../../constants/colors';

interface DateProps {
  month: string;
  isDisplayMonth: boolean;
  date: number;
  isFirstDate: boolean;
  isToday: boolean;
  title: string;
  body: string;
}

export const Day: React.FC<DateProps> = props => {
  const { setEditing, displayPeriod, setDisplayDate, setModal } = useContext(ctx);
  const { displayMonth } = displayPeriod;

  const handleDiaryEdit = (date: number) => {
    setDisplayDate(`${displayMonth}-${date}`);
    setEditing(true);
    setModal(true);
  }

  return (
    <StyledLi isdisplayMonth={props.isDisplayMonth}>
      <StyledButton title={props.title} onClick={() => handleDiaryEdit(props.date)}>
        {props.isFirstDate &&
          <StyledMonth>{props.month}</StyledMonth>
        }
        <StyledDate isToday={props.isToday}>{props.date}</StyledDate>
      </StyledButton>
    </StyledLi>
  );
};

const StyledButton = styled.button <{ title: string; }>`
  background-color: ${props => props.title ? colors.BACKGROUND : '#ddd'};
  border-radius: 3px;
  width: 100%;
  height: 80px;
  border: none;
  position: relative;
  outline: none;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  user-select: none;
  &:active {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1),
                inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLi = styled.li<{ isdisplayMonth: boolean; }>`
  width: calc(100% / 7);
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  opacity: ${props => props.isdisplayMonth ? 1 : .4};
`;

const StyledMonth = styled.span`
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 1rem;
  color: red;
  text-transform: initial;
`;

const StyledDate = styled.span<{ isToday: boolean }>`
  position: absolute;
  top: 10%;
  right: 10%;
  font-size: 1rem;
  font-weight: ${props => props.isToday ? "bold" : "normal"};
  color: ${props => props.isToday ? "#f00" : "#555"};
`;