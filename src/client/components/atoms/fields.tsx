// modules
import React from "react";
import styled from "styled-components";

// constant
import colors from "../../constants/colors";

interface FieldsType {
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  error?: boolean;
}

/*———————————–———————————–
  TextBox
——————————————————————––*/

export const TextBox: React.FC<FieldsType> = props => (
  <StyledLabel>
    <StyledInput
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      error={props.error}
    />
  </StyledLabel>
);

const StyledLabel = styled.label`
  display: block;
  margin: 10px 0;
  width: 100%;
`;

const StyledInput = styled.input<{ error: boolean }>`
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 10px;
  padding: 16px;
  background-color: ${props => props.error ? colors.ERROR_FIELD : colors.BACKGROUND};
  text-shadow: 1px 1px 0 ${colors.WHITE};
  box-shadow:  inset 2px 2px 5px ${colors.FIELD_SHADOW},
               inset -5px -5px 10px ${props => props.error ? colors.ERROR_FIELD_SHADOW : colors.WHITE};
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
                inset -1px -1px 2px ${colors.WHITE};
  }
`;


/*———————————–———————————–
  TextArea
——————————————————————––*/

export const TextArea: React.FC<FieldsType> = props => (
  <StyledLabel>
    <StyledTextarea
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      error={props.error}
    />
  </StyledLabel>
);

const StyledTextarea = styled.textarea<{ error: boolean }>`
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 10px;
  padding: 16px;
  line-height: inherit;
  height: 50vh;
  background-color: ${props => props.error ? colors.ERROR_FIELD : colors.BACKGROUND};
  box-shadow: inset 2px 2px 5px ${colors.FIELD_SHADOW},
              inset -5px -5px 10px ${props => props.error ? colors.ERROR_FIELD_SHADOW : colors.WHITE};
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
                inset -1px -1px 2px ${colors.WHITE};
  }
`;