import isEmpty from 'lodash/isEmpty';
import type { NavigationTree } from '@/@types/navigation';
import Link from 'next/link';
import React from 'react';
import { TFunction } from 'i18next';
import { PrimitiveType, Schema, TypeConfig } from '@/@types/common.ts';

export function getIsAuth(
  userAuthority: string[] = [],
  authority: string[] = [],
  emptyCheck = false
) {
  if (isEmpty(authority) || isEmpty(userAuthority) || typeof authority === 'undefined') {
    return !emptyCheck;
  }
  return authority.some((role) => userAuthority.includes(role));
}

export const getItemList = (
  navigationTree: NavigationTree[],
  userAuth: string[],
  TFunc: TFunction<string, undefined>
): any[] =>
  [...navigationTree]
    .filter((nav) => getIsAuth(userAuth, nav.authority))
    .map((childNav) => {
      if (childNav.children?.length > 0) {
        childNav.children = getItemList(childNav.children, userAuth, TFunc);
      }
      return {
        ...childNav,
        key: childNav.key,
        label: (
          <Link href={childNav.path || ''} target={childNav?.isExternalLink ? '_blank' : ''}>
            {TFunc(childNav.title)}
          </Link>
        ),
        icon: childNav.icon || null,
        children: isEmpty(childNav.children) ? undefined : childNav.children
      };
    });

export function generateMockDataFromSchema(
  schema: Schema,
  numberRecord: number = 1
): Record<string, any> {
  const generateValue = (type: PrimitiveType, options: any = {}): any => {
    switch (type) {
      case 'string':
        const length = options.length || 10;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({ length }, () =>
          chars.charAt(Math.floor(Math.random() * chars.length))
        ).join('');

      case 'number':
        const min = options.min || 0;
        const max = options.max || 100;
        return Math.floor(Math.random() * (max - min + 1)) + min;

      case 'boolean':
        return Math.random() < 0.5;

      case 'date':
        const startDate = options.startDate ? new Date(options.startDate) : new Date(2000, 0, 1);
        const endDate = options.endDate ? new Date(options.endDate) : new Date();
        return new Date(
          startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
        );

      case 'array':
        const itemType = options.itemType || 'string';
        const arrayLength = options.length || 5;
        return Array.from({ length: arrayLength }, () =>
          generateValue(itemType, options.itemOptions || {})
        );

      case 'object':
        const subSchema = options.schema || {};
        return generateMockDataFromSchema(subSchema);

      default:
        throw new Error(`Unsupported data type: ${type}`);
    }
  };

  return Array.from({ length: numberRecord }, () =>
    Object.entries(schema).reduce(
      (mockData, [key, typeConfig]) => {
        if (typeof typeConfig === 'string') {
          mockData[key] = generateValue(typeConfig as PrimitiveType);
        } else if (typeof typeConfig === 'object') {
          const { type, ...options } = typeConfig as TypeConfig;
          mockData[key] = generateValue(type, options);
        } else {
          throw new Error(`Invalid schema definition for key: ${key}`);
        }
        return mockData;
      },
      {} as Record<string, any>
    )
  );
}
