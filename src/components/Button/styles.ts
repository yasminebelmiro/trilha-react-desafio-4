import { styled, css } from "styled-components";
import { IButtonVariant } from "./types";

export const ButtonContainer = styled.button<IButtonVariant>`
  width: 170px;
  height: 50px;
  border: none;
  margin: 10px;

  background-color: #ffb703;
  border-radius: 45px;
  color: #ffffff;
  font-size: 20px;

  font-family: "Crimson Text", serif;

  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;

  ${({ variant }) =>
    variant === "entrar" &&
    css`
      background: #023047;
    `};
`;

export const IconContainer = styled.div`
  margin-right: 16px;
`;
