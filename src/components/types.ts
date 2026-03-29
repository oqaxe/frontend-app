// types.ts

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CssProperties } from './styles';

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  css?: CssProperties;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface InputProps extends DetailedHTMLProps<HTMLInputElement, HTMLInputElement> {
  children?: never;
  css?: CssProperties;
  type?: 'text' | 'email' | 'password';
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
}

interface LinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: React.ReactNode;
  css?: CssProperties;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

interface ImageProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
  alt?: string;
  css?: CssProperties;
}

interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  css?: CssProperties;
}

interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
  css?: CssProperties;
}

interface ListProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
  type: 'ul' | 'ol' | 'li';
  css?: CssProperties;
}

interface ListItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
  css?: CssProperties;
}

interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  css?: CssProperties;
}