import { CSSProperties, ReactNode } from 'react';
import { languages } from '@/utils/i18n/settting';

export interface CommonProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace TypeAttributes {
  type Size = 'lg' | 'md' | 'sm' | 'xs';
  type Shape = 'round' | 'circle' | 'none';
  type Status = 'success' | 'warning' | 'danger' | 'info';
  type FormLayout = 'horizontal' | 'vertical' | 'inline';
  type ControlSize = 'lg' | 'md' | 'sm';
  type MenuVariant = 'light' | 'dark' | 'themed' | 'transparent';
  type Direction = 'ltr' | 'rtl';
}

export type Languages = (typeof languages)[number];

export type PrimitiveType = 'string' | 'number' | 'boolean' | 'date' | 'array' | 'object';

export interface BaseTypeConfig {
  type: PrimitiveType;
}

export interface StringTypeConfig extends BaseTypeConfig {
  type: 'string';
  length?: number;
}

export interface NumberTypeConfig extends BaseTypeConfig {
  type: 'number';
  min?: number;
  max?: number;
}

export interface BooleanTypeConfig extends BaseTypeConfig {
  type: 'boolean';
}

export interface DateTypeConfig extends BaseTypeConfig {
  type: 'date';
  startDate?: string | Date;
  endDate?: string | Date;
}

export interface ArrayTypeConfig extends BaseTypeConfig {
  type: 'array';
  itemType: PrimitiveType;
  length?: number;
  itemOptions?: TypeConfig;
}

export interface ObjectTypeConfig extends BaseTypeConfig {
  type: 'object';
  schema: Schema;
}

export type TypeConfig =
  | StringTypeConfig
  | NumberTypeConfig
  | BooleanTypeConfig
  | DateTypeConfig
  | ArrayTypeConfig
  | ObjectTypeConfig;

export type Schema = {
  [key: string]: TypeConfig | PrimitiveType;
};
