import type * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

import { clsxm } from '~/lib/utils';

type breadcrumbProps = React.ComponentProps<'nav'> & { separator?: React.ReactNode }

function Breadcrumb({ ref, ...props }: breadcrumbProps ){
  return <nav ref={ref} aria-label="breadcrumb" {...props} />;
}

function BreadcrumbList({ ref, className, ...props}: React.ComponentProps<'ol'>){
  return (
    <ol
      ref={ref}
      className={clsxm(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
        className,
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ref, className, ...props}: React.ComponentProps<'li'>){
  return (
    <li
      ref={ref}
      className={clsxm('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
}

function BreadcrumbLink({ ref, asChild, className, ...props }: React.ComponentProps<'a'> & {
  asChild?: boolean;
}){
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      className={clsxm('transition-colors hover:text-foreground', className)}
      {...props}
    />
  );
}

function BreadcrumbPage({ref, className, ...props}: React.ComponentProps<'span'>){
  return (
    <span 
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={clsxm('font-normal text-foreground', className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({children, className, ...props}: React.ComponentProps<'li'>){
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={clsxm('[&>svg]:w-3.5 [&>svg]:h-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({className, ...props}: React.ComponentProps<'span'>){
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={clsxm('flex h-9 w-9 items-center justify-center',className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
