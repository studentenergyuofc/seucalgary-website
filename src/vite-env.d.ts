/// <reference types="vite/client" />

export interface Position {
  title: string;
  description: string;
  deadline: string;
  path: string;
  btnText: string;
  isEnable: boolean;
}

export interface NewsItemProps {
  path: string;
  title: string;
  description: string;
  date: string;
  animation: string;
}
