// modules
import React, { useContext } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

// context
import { ctx } from '../pages/main';

//constants
import colors from '../../constants/colors';

interface SwitchBtnProps {
  switchTo: 'prev' | 'next';
}

export const SwitchBtn: React.FC<SwitchBtnProps> = props => {
  const { displayPeriod, setDisplayPeriod, thisYear, thisMonth } = useContext(ctx);
  const { displayMonth, displayYear } = displayPeriod;

  const disabled = props.switchTo === 'next' && displayMonth === thisMonth && displayYear === thisYear ? true : false;

  const handleSwitch = () => {
    if (props.switchTo === 'prev') {
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
    <StyledButton onClick={handleSwitch} disabled={disabled}>
      <i className={props.switchTo === 'prev' ? "fas fa-chevron-left" : "fas fa-chevron-right"}></i>
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