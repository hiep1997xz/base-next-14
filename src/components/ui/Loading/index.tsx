import { CommonProps } from '@/@types/common.ts';
import { ElementType, ReactNode } from 'react';
import classNames from 'classnames';
import { CgSpinner } from 'react-icons/cg';

interface BaseLoadingProps extends CommonProps {
  asElement?: ElementType;
  customLoader?: ReactNode;
  loading: boolean;
  isSpining?: boolean;
  size?: string | number;
  color?: string;
}

export const Loading = (props: BaseLoadingProps) => {
  const {
    loading,
    children,
    isSpining = true,
    size,
    color,
    className,
    asElement: Component = 'div',
    customLoader
  } = props;

  return loading ? (
    <Component
      className={classNames(!customLoader && 'flex items-center justify-center h-full', className)}>
      {customLoader ? (
        <>{customLoader}</>
      ) : (
        <CgSpinner
          className={classNames(isSpining && 'animate-spin', color && `text-${color}`, className)}
          size={size || 40}
        />
      )}
    </Component>
  ) : (
    <>{children}</>
  );
};
