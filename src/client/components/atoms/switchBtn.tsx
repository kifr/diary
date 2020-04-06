// modules
import React, { useContext } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

// context
import { ctx } from '../pages/top';

//constants
import colors from '../../constants/colors';

interface SwitchBtnProps {
  switchTo: 'prev' | 'next';
}

export const SwitchBtn: React.FC<SwitchBtnProps> = props => {
  const { displayPeriod, setDisplayPeriod, thisYear, thisMonth } = useContext(ctx);
  let { displayMonth, displayYear } = displayPeriod;

  let disabled = false;
  if (displayYear === thisYear && displayMonth === thisMonth && props.switchTo === 'next') {
    disabled = true;
  }

  const handleSwitch = () => {
    let year = displayYear;
    let month = displayMonth;
    if (props.switchTo === 'prev') {
      if (displayMonth === 1) {
        month = 12;
        year--;
      } else {
        month--;
      }
    } else {
      if (displayMonth === 12) {
        month = 1;
        year++;
      } else {
        month++;
      }
    };

    setDisplayPeriod({
      displayYear: year,
      displayMonth: month
    });
  }

  return (
    <StyledButton onClick={handleSwitch} disabled={disabled}>
      {props.switchTo === 'prev' ?
        <i className="fas fa-chevron-left"></i> :
        <i className="fas fa-chevron-right"></i>
      }
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  font-size: 1rem;
  text-align: center;
  margin: 15px;
  cursor: pointer;
  border: none;
  color: ${colors.PRIMARY};
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              3px 3px 5px rgba(0, 0, 0, 0.1);
  background: ${colors.BACKGROUND};
  outline: none;
  &:active,
  &:disabled {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1),
                inset 3px 3px 5px rgba(0, 0, 0, 0.1);
    color: rgba(0, 196, 109, 0.3);
    cursor: initial;
  }
`;