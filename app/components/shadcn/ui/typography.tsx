import type * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { clsxm } from '~/lib/utils';

const typographyVariants = cva("font-[-apple-system,_BlinkMacSystemFont,_'Segoe_UI_(Custom)',_Roboto,_'Helvetica_Neue',_'Open_Sans_(Custom)',_system-ui,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji'] not-italic font-bold",
  {
    variants: {
      variant: {
        h9: 'text-[0.75rem] leading-[1rem] tracking-[calc(0.0025em + 0em)]',
        h8: 'text-[0.875rem] leading-[1.125rem]',
        h7: 'text-[1rem] leading-[1.375rem]',
        h6: 'text-[1.125rem] leading-[1.5rem] tracking-[calc(-0.0025em + 0em)]',
        h5: 'text-[1.25rem] leading-[1.625rem] tracking-[calc(-0.005em + 0em)]',
        h4: 'text-[1.5rem] leading-[1.875rem] tracking-[calc(-0.00625em + 0em)]',
        h3: 'text-[1.75rem] leading-[2.25rem] tracking-[calc(-0.0075em + 0em)]',
        h2: 'text-[2.188rem] leading-[2.5rem] tracking-[calc(-0.01em + 0em)]',
        h1: 'text-[3.75rem] leading-[3.75rem] tracking-[calc(-0.025em + 0em)]'
      },
      color: {
        default: 'text-primary',
        destructive: 'text-destructive',
        secondary: 'text-secondary',
        char1: 'text-color-chart-1',
        char2: 'text-color-chart-2',
        char3: 'text-color-chart-3',
        char4: 'text-color-chart-4',
        char5: 'text-color-chart-5'
      }
    },
    defaultVariants: {
      variant: 'h7',
      color: 'default',
    },
  }
)

type typographyProps<T extends React.ElementType> = React.ComponentProps<'p'> & VariantProps<typeof typographyVariants> & {
  as?: T,
  asChild?: boolean;
  children: React.ReactNode
}

function Typography({
  as,
  children,
  className,
  variant,
  color,
  asChild = false,
  ...props
}: typographyProps<React.ElementType>) {
  const Comp = asChild ? Slot : as || 'p';
  return (
    <Comp 
      data-slot="p"
      className={clsxm(typographyVariants({ variant, color }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Typography, typographyVariants }