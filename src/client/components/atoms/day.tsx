// modules
import React, { useContext } from "react";
import styled from "styled-components";

// context
import { ctx } from "../pages/main";

//constants
import colors from "../../constants/colors";

interface DateType {
  month: number;
  isCrrMonth: boolean;
  date: number;
  isFirstDate: boolean;
  isToday: boolean;
  title: string;
}

enum Month {
  "Jan." = 1,
  "Feb.",
  "Mar.",
  "Apr.",
  "May.",
  "Jun.",
  "Jul.",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec."
}

export const Day: React.FC<DateType> = props => {
  const {
    setModal,
    setDiaryEdit,
    displayPeriod,
    setEditingDate,
    setDiaryTitle,
    setDiaryBody
  } = useContext(ctx);
  const { displayYear } = displayPeriod;

  const handleDiaryEdit = () => {
    fetch(`/api/getDiaryContents/${displayYear}-${props.month}-${props.date}`)
    .then(res => res.json())
    .then(res => {
      setEditingDate({
        year: displayYear,
        month: props.month,
        date: props.date
      });

      if (res.title) {
        setDiaryTitle(res.title);
        setDiaryBody(res.body);
      }

      document.body.classList.add("modal-open");
      setDiaryEdit(true);
      setModal(true);
    });
  };

  return (
    <StyledLi isCrrMonth={props.isCrrMonth}>
      <StyledButton title={props.title} onClick={() => handleDiaryEdit()}>
        {props.isFirstDate &&
          <StyledMonth>{Month[props.month]}</StyledMonth>
        }
        <StyledDate isToday={props.isToday}>{props.date}</StyledDate>
      </StyledButton>
    </StyledLi>
  );
};

const StyledButton = styled.button <{ title: string; }>`
  background-color: ${props => props.title ? colors.BACKGROUND : "#ddd"};
  border-radius: 3px;
  width: 100%;
  height: 80px;
  border: none;
  position: relative;
  outline: none;
  box-shadow: -2px -2px 5px ${colors.WHITE},
              3px 3px 5px ${colors.OBJECT_SHADOW};
  cursor: pointer;
  user-select: none;
  &:active {
    box-shadow: inset -2px -2px 5px ${colors.WHITE},
                inset 3px 3px 5px ${colors.OBJECT_SHADOW};
  }
`;

const StyledLi = styled.li<{ isCrrMonth: boolean; }>`
  width: calc(100% / 7);
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  opacity: ${props => props.isCrrMonth ? 1 : .4};
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
  color: ${props => props.isToday ? colors.DANGER : colors.NORMAL_FONT};
`;