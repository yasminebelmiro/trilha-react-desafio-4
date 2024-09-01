import styled from "styled-components";

export const InputContainer = styled.div``;

export const StyledInput = styled.input`
  width: 300px;
  height: 60px;

  border: none;
  border-radius: 10px;

  margin: 10px;

  font-size: 19px;
  color: #ffb703;
  padding: 0 20px;

  &:: placeholder {
    color: #ffb703;
    opacity: 1;
  }

  &:focus {
    outline: none; /* Remove o contorno padrão do navegador */
  }
`;

export const ErrorMesage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
  margin-left: 10px;
`;
