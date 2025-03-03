import { ReactNode } from 'react';

export interface NavigationTree {
  key: string;
  path: string;
  isExternalLink?: boolean;
  title: string;
  icon: ReactNode;
  type?: 'group';
  authority: string[];
  children: NavigationTree[];
}
