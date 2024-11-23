export interface NewsItemProps {
  path: string;
  blurhash: string;
  title: string;
  description: string;
  date: string;
  animation: string;
  link?: string;
}

export interface NewsItemExtendedProps extends NewsItemProps {
  type: string; //optional for events
}
