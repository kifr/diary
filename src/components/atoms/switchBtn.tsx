// modules
import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// context
import { ctx } from '../pages/top';

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
      <StyledIcon direction={props.switchTo} />
    </StyledButton>
  );
};

const StyledButton = styled(Button) <{ disabled: boolean }>`
  && {
    min-width: 45px;
    min-height: 45px;
    padding: 0;
    border-radius: 30px;
    opacity: ${props => props.disabled ? .4 : 1};
  }
`;

const StyledIcon = styled(KeyboardArrowDownIcon) <{ direction: 'prev' | 'next'; }>`
  && {
    color: #555;
    font-size: 2rem;
    transform: rotate(${props => props.direction === 'prev' ? '90deg' : '-90deg'});
  }
`;