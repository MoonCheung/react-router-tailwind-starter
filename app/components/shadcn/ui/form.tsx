import * as React from 'react';
import * as FormPrimitive from '@radix-ui/react-form';

import { clsxm } from '~/lib/utils';

function Form({...props}: React.ComponentProps<typeof FormPrimitive.Root>){
  return <FormPrimitive.Root data-slot="form" {...props} />
}

function FormField({ name, ref, children, ...props }: React.ComponentProps<typeof FormPrimitive.Field>){
  return (
    <FormPrimitive.Field name={name} ref={ref} data-slot="form-field" {...props}>
      {children}
    </FormPrimitive.Field>
  )
}

function FormLabel({ ...props }: React.ComponentProps<typeof FormPrimitive.Label>){
  return <FormPrimitive.Label data-slot="form-label" {...props} />
}

function FormControl({ children, ... props }: React.ComponentProps<typeof FormPrimitive.Control>){
  return (
    <FormPrimitive.Control data-slot="form-control" {...props}>
      {children}
    </FormPrimitive.Control>
  )
}

function FormMessage({ children, ...props }: React.ComponentProps<typeof FormPrimitive.Message>){
  return (
    <FormPrimitive.Message data-slot="form-message" {...props}>
      {children}
    </FormPrimitive.Message>
  )
}

function FormValidityState({ children, name }: React.ComponentProps<typeof FormPrimitive.ValidityState>){
  return (
    <FormPrimitive.ValidityState data-slot="form-validity-state" name={name}>
      {children}
    </FormPrimitive.ValidityState>
  )
}

function FormSubmit({ children, ...props }: React.ComponentProps<typeof FormPrimitive.Submit>){
  return (
    <FormPrimitive.Submit data-slot="form-submit" {...props}>
      {children}
    </FormPrimitive.Submit>
  )
}

export { Form, FormField, FormLabel, FormControl, FormMessage, FormValidityState, FormSubmit }
