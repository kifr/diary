// modules
import React from "react";
import styled from "styled-components";

// constant
import colors from "../../constants/colors";

interface FieldsType {
  name: string;
  placeholder?: string;
  onChange?: any;
  value: string;
  error?: boolean;
}

export const TextBox: React.FC<FieldsType> = props => {
  const handleChange = (e: React.SyntheticEvent<any, Event>) => {
    if (!props.onChange) {
      e.preventDefault();
      return false;
    }

    props.onChange(e);
  };

  return (
    <StyledLabel>
      <StyledInput
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={props.value}
        error={props.error}
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
  };

  return (
    <StyledLabel>
      <StyledTextarea
      name={props.name}
      placeholder={props.placeholder}
      onChange={handleChange}
      value={props.value}
      error={props.error}
    />
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  display: block;
  margin: 10px 0;
  width: 100%;
`;

const StyledInput = styled.input<{ error: boolean }>`
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 10px;
  padding: 16px;
  background-color: ${props => props.error ? colors.ERROR_FIELD : colors.BACKGROUND};
  text-shadow: 1px 1px 0 #fff;
  box-shadow:  inset 2px 2px 5px ${colors.FIELD_SHADOW},
               inset -5px -5px 10px ${props => props.error ? colors.ERROR_FIELD_SHADOW : "#fff"};
  width: 100%;
  box-sizing: border-box;
  transition: all .3s ease-in-out;
  appearance: none;
  ::placeholder {
    color: ${props => props.error ? colors.ERROR_PLACEHOLDER : colors.PLACEHOLDER};
    transition: color .3s;
  }
  &:focus {
    box-shadow: inset 1px 1px 2px ${colors.FIELD_SHADOW},
                inset -1px -1px 2px #fff;
  }
`;

const StyledTextarea = styled.textarea<{ error: boolean }>`
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 10px;
  padding: 16px;
  line-height: inherit;
  height: 50vh;
  background-color: ${props => props.error ? colors.ERROR_FIELD : colors.BACKGROUND};
  text-shadow: 1px 1px 0 #fff;
  box-shadow: inset 2px 2px 5px ${colors.FIELD_SHADOW},
              inset -5px -5px 10px ${props => props.error ? colors.ERROR_FIELD_SHADOW : "#fff"};;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  resize: none;
  ::placeholder {
    color: ${props => props.error ? colors.ERROR_PLACEHOLDER : colors.PLACEHOLDER};
    transition: color .3s;
  }
  &:focus {
    box-shadow: inset 1px 1px 2px ${colors.FIELD_SHADOW},
                inset -1px -1px 2px #fff;
  }
`;