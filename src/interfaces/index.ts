import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  labelName: string;
  placeholder: string;
  inputType: HTMLInputTypeAttribute;
  required: boolean;
  width: string;
}

export interface iInputStyleProps {
  width: string;
}

export interface iFormModal {
  email: string;
  password: string;
  confirmPass?: string;
  name?: string;
}

// interface iErrorsInput{
//     message: string,
//     ref: InputHTMLAttributes<HTMLInputElement>,
//     type: string
// }

export interface iButtonProps {
  width?: string;
  padding?: string;
  styleButton: string;
  fontSize?: string;
}

export interface iButtonProps {
  width?: string;
  padding?: string;
  styleButton: string;
  fontSize?: string;
}

export interface iCardProductProps {
  name: string;
  price: number;
  img: string;
  id: number
}

export interface iCardMyProductProps {
  image: string;
  name: string;
  price: number;
  id: number;
}

export interface iCardHistoryBuy {
  image: string;
  name: string;
  price: number;
}
export interface iUserPage {
  children: React.ReactNode;
}

export interface iFormRegister {
  name: string;
  adress: string;
  cep: number;
  email: string;
  dateOfBirth: number;
}
