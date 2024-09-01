import React from "react";

export interface IButton {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: string;
  leftIcon?: any;

}

export interface IButtonVariant{
  variant?: string;
}