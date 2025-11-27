import type * as React from 'react';

import { clsxm } from '~/lib/utils';

function Card({ ref, className, ...props }: React.ComponentProps<'div'>){
  return (
    <div ref={ref} className={clsxm('rounded-lg border bg-card text-card-foreground shadow-sm', className,)} {...props} />
  )
}

function CardHeader({ ref, className, ...props }: React.ComponentProps<'div'>){
  return (
    <div ref={ref} className={clsxm('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
}

function CardTitle({ ref, className, ...props }: React.ComponentProps<'div'>){
  return (
    <div ref={ref} className={clsxm('text-2xl font-semibold leading-none tracking-tight', className )} {...props} />
  )
}

function CardDescription({ ref, className, ...props }: React.ComponentProps<'div'>){
  return (
    <div
      ref={ref}
      className={clsxm('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

function CardContent({ ref, className, ...props }: React.ComponentProps<'div'>){
  return (
    <div ref={ref} className={clsxm('p-6 pt-0', className)} {...props} />
  )
}

function CardFooter({ ref, className, ...props }: React.ComponentProps<'div'>){
  return (
    <div
      ref={ref}
      className={clsxm('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
}

export { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter
}