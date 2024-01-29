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
  blurhash: string;
  title: string;
  description: string;
  date: string;
  animation: string;
}

export interface ExecMembers {
  name: string;
  position: string;
  path: string;
  altimages: string;
  altimagesizes: string;
  major: string;
  text: string;
  hobby: string;
  blurhash: string;
  }

export interface Articles {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  blurhash: string;
}
