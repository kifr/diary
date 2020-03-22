// modules
import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SubjectIcon from '@material-ui/icons/Subject';

interface DayProps {
  month: string;
  isdisplayMonth: boolean;
  date: number;
  isFirstDay: boolean;
  isToday: boolean;
  title: string;
  body: string;
}

export const Day: React.FC<DayProps> = props => {
  return (
    <StyledLi isdisplayMonth={props.isdisplayMonth}>
      <StyledButton title={props.title}>
        {props.isFirstDay &&
          <StyledMonth>{props.month}</StyledMonth>
        }
        <StyledDate isToday={props.isToday}>{props.date}</StyledDate>
        {props.title ?
          <StyledSubjectIcon className="dayIcon" /> :
          <StyledAddIcon className="dayIcon" />
        }
      </StyledButton>
    </StyledLi>
  );
};

const StyledLi = styled.li<{ isdisplayMonth: boolean; }>`
  width: calc(100% / 7);
  position: relative;
  padding: 2px;
  box-sizing: border-box;
  opacity: ${props => props.isdisplayMonth ? 1 : .4};
`;

const StyledButton = styled(Button) <{ title: string; }>`
  && {
    background-color: ${props => props.title ? '#fefefe' : '#ddd'};
    border-radius: 3px;
    width: 100%;
    height: 80px;
  }
`;

const StyledMonth = styled.span`
  position: absolute;
  top: 1%;
  left: 10%;
  font-size: 1rem;
  color: red;
  text-transform: initial;
`;

const StyledDate = styled.span<{ isToday: boolean }>`
  position: absolute;
  top: 1%;
  right: 10%;
  font-size: 1rem;
  font-weight: ${props => props.isToday ? "bold" : "normal"};
  color: ${props => props.isToday ? "#f00" : "#555"};
`;

const StyledSubjectIcon = styled(SubjectIcon)`
  && {
    color: #555;
    font-size: 2rem;
  }
`;

const StyledAddIcon = styled(AddIcon)`
  && {
    color: #555;
    font-size: 2rem;
  }
`;