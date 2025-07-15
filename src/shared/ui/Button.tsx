import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Button as RadixButton } from '@radix-ui/themes';

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'color'
  > {
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md';
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      asChild = false,
      variant = 'primary',
      size = 'md',
      className,
      ...props
    },
    ref,
  ) => {
    const radixVariant =
      variant === 'primary'
        ? 'solid'
        : variant === 'secondary'
          ? 'soft'
          : 'outline';
    const radixSize = size === 'sm' ? '1' : '2';

    if (asChild)
      return (
        <Slot ref={ref} className={className} {...props} />
      );

    return (
      <RadixButton
        ref={ref}
        variant={radixVariant}
        size={radixSize}
        className={className}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
