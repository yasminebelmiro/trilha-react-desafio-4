import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/types";
import React from "react";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<IFormLogin>;
  placeholder?: string;
  name: "email" | "password";
  errorMesage?: string;

}
