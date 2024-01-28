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

export interface ExecMembers {
  name: string;
  position: string;
  path: string;
  major: string;
  text: string;
  hobby: string;
  }

export interface Articles {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
}
