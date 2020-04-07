// modules
import React from 'react';
import styled from 'styled-components';

//constants
import colors from '../../constants/colors';

interface FieldsType {
  name: string;
  placeholder?: string;
  onChange?: any;
  value: string;
}

export const TextBox: React.FC<FieldsType> = props => {
  const handleChange = (e: React.SyntheticEvent<any, Event>) => {
    if (!props.onChange) {
      e.preventDefault();
      return false;
    }

    props.onChange(e);
  }

  return (
    <StyledLabel>
      <StyledInput
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={props.value}
      />
    </StyledLabel>
  );
};

export const TextArea: React.FC<FieldsType> = props => {
  const handleChange = (e: React.SyntheticEvent<any, Event>) => {
    if (!props.onChange) {
      e.preventDefault();
      return false;
    }

    props.onChange(e);
  }

  return (
    <StyledLabel>
      <StyledTextarea
      name={props.name}
      placeholder={props.placeholder}
      onChange={handleChange}
      value={props.value}
    />
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  display: block;
  margin: 10px 0;
  width: 100%;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 10px;
  padding: 16px;
  background-color: ${colors.BACKGROUND};
  text-shadow: 1px 1px 0 #fff;
  box-shadow:  inset 2px 2px 5px #BABECC,
               inset -5px -5px 10px #fff;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  ::placeholder {
    color: #ccc;
  }
  &:focus {
    box-shadow: inset 1px 1px 2px #BABECC,
                inset -1px -1px 2px #fff;
  }
`;

const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 10px;
  padding: 16px;
  line-height: inherit;
  height: 50vh;
  background-color: ${colors.BACKGROUND};
  text-shadow: 1px 1px 0 #fff;
  box-shadow: inset 2px 2px 5px #BABECC,
              inset -5px -5px 10px #fff;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  resize: none;
  ::placeholder {
    color: #ccc;
  }
  &:focus {
    box-shadow: inset 1px 1px 2px #BABECC,
                inset -1px -1px 2px #fff;
  }
`;