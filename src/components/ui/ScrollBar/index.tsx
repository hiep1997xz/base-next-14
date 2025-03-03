import { forwardRef } from 'react';
import type { ScrollbarProps as ReactCustomScrollbarProps } from 'react-custom-scrollbars-2';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { TypeAttributes } from '@/@types/theme';

export interface ScrollbarProps extends ReactCustomScrollbarProps {
  direction?: TypeAttributes.Direction;
}

export type ScrollbarRef = Scrollbars;

const Index = forwardRef<ScrollbarRef, ScrollbarProps>((props, ref) => {
  const { direction = 'ltr', ...rest } = props;

  return (
    <Scrollbars
      ref={ref}
      renderView={(props) => (
        <div
          {...props}
          style={{
            ...props.style,
            ...(direction === 'rtl' && {
              marginLeft: props.style.marginRight,
              marginRight: 0
            })
          }}
        />
      )}
      {...rest}
    />
  );
});

Index.displayName = 'Index';

export default Index;
