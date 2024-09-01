import { InputContainer, StyledInput, ErrorMesage } from "./styles";
import { IInputProps } from "././types";
import { Controller } from "react-hook-form";

const Input = ({ control, name, placeholder, errorMesage, ...rest }: IInputProps) => {
  return (
    <>
      <InputContainer>
      
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <StyledInput
              {...rest}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
      </InputContainer>
      {errorMesage ? <ErrorMesage>{errorMesage}</ErrorMesage> : null}
    </>
  );
};

export default Input;
