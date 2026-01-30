export enum SlideType {
  COVER = 'COVER',
  Content = 'CONTENT',
  FINANCIAL = 'FINANCIAL',
  CLOSING = 'CLOSING'
}

export interface SlideItem {
  title?: string;
  description: string;
  iconName?: string;
  align?: 'left' | 'center' | 'right';
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  items?: SlideItem[];
  highlight?: string;
}