import * as React from 'react';
import { ArrowRight, Plus, Save } from 'lucide-react';
import { Button } from '~/components/shadcn/ui/button';

export default function ButtonPage() {
  return <div>
    <div className='mt-8'>
      Primary
      <div className='flex flex-wrap items-end gap-3'>
        <Button variant='default' size="lg" type='submit'>Primary Button</Button>
        <Button variant='default' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit'>
          <span>Primary Button</span>
        </Button>
        <Button variant='default' size="default" type='submit'>Primary Button</Button>
        <Button variant='default' size="sm" type='submit'>Primary Button</Button>
      </div>
      <div className='mt-3 flex flex-wrap items-end gap-3'>
        <Button variant='default' size="lg" type='submit' disabled>Primary Button</Button>
        <Button variant='default' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit' disabled>
          <span>Primary Button</span>
        </Button>
        <Button variant='default' size="default" type='submit' disabled>Primary Button</Button>
        <Button variant='default' size="sm" type='submit' disabled>Primary Button</Button>
      </div>
      Destructive
      <div className='flex flex-wrap items-end gap-3'>
        <Button variant='destructive' size="lg" type='submit'>Destructive Button</Button>
        <Button variant='destructive' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit'>
          <span>Destructive Button</span>
        </Button>
        <Button variant='destructive' size="default" type='submit'>Destructive Button</Button>
        <Button variant='destructive' size="sm" type='submit'>Destructive Button</Button>
      </div>
      <div className='mt-3 flex flex-wrap items-end gap-3'>
        <Button variant='destructive' size="lg" type='submit' disabled>Destructive Button</Button>
        <Button variant='destructive' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit' disabled>
          <span>Destructive Button</span>
        </Button>
        <Button variant='destructive' size="default" type='submit' disabled>Destructive Button</Button>
        <Button variant='destructive' size="sm" type='submit' disabled>Destructive Button</Button>
      </div>
      Outline
      <div className='flex flex-wrap items-end gap-3'>
        <Button variant='outline' size="lg" type='submit'>Outline Button</Button>
        <Button variant='outline' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit'>
          <span>Outline Button</span>
        </Button>
        <Button variant='outline' size="default" type='submit'>Outline Button</Button>
        <Button variant='outline' size="sm" type='submit'>Outline Button</Button>
      </div>
      <div className='mt-3 flex flex-wrap items-end gap-3'>
        <Button variant='outline' size="lg" type='submit' disabled>Outline Button</Button>
        <Button variant='outline' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit' disabled>
          <span>Primary Button</span>
        </Button>
        <Button variant='outline' size="default" type='submit' disabled>Outline Button</Button>
        <Button variant='outline' size="sm" type='submit' disabled>Outline Button</Button>
      </div>
      Secondary
      <div className='flex flex-wrap items-end gap-3'>
        <Button variant='secondary' size="lg" type='submit'>Secondary Button</Button>
        <Button variant='secondary' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit'>
          <span>Secondary Button</span>
        </Button>
        <Button variant='secondary' size="default" type='submit'>Secondary Button</Button>
        <Button variant='secondary' size="sm" type='submit'>Secondary Button</Button>
      </div>
      <div className='mt-3 flex flex-wrap items-end gap-3'>
        <Button variant='secondary' size="lg" type='submit' disabled>Secondary Button</Button>
        <Button variant='secondary' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit' disabled>
          <span>Secondary Button</span>
        </Button>
        <Button variant='secondary' size="default" type='submit' disabled>Secondary Button</Button>
        <Button variant='secondary' size="sm" type='submit' disabled>Secondary Button</Button>
      </div>
      Ghost
      <div className='flex flex-wrap items-end gap-3'>
        <Button variant='ghost' size="lg" type='submit'>Ghost Button</Button>
        <Button variant='ghost' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit'>
          <span>Ghost Button</span>
        </Button>
        <Button variant='ghost' size="default" type='submit'>Ghost Button</Button>
        <Button variant='ghost' size="sm" type='submit'>Ghost Button</Button>
      </div>
      <div className='mt-3 flex flex-wrap items-end gap-3'>
        <Button variant='ghost' size="lg" type='submit' disabled>Ghost Button</Button>
        <Button variant='ghost' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit' disabled>
          <span>Ghost Button</span>
        </Button>
        <Button variant='ghost' size="default" type='submit' disabled>Ghost Button</Button>
        <Button variant='ghost' size="sm" type='submit' disabled>Ghost Button</Button>
      </div>
      Link
      <div className='flex flex-wrap items-end gap-3'>
        <Button variant='link' size="lg" type='submit'>Link Button</Button>
        <Button variant='link' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit'>
          <span>Link Button</span>
        </Button>
        <Button variant='link' size="default" type='submit'>Link Button</Button>
        <Button variant='link' size="sm" type='submit'>Link Button</Button>
      </div>
      <div className='mt-3 flex flex-wrap items-end gap-3'>
        <Button variant='link' size="lg" type='submit' disabled>Link Button</Button>
        <Button variant='link' size="default" leftIcon={Plus} rightIcon={ArrowRight} type='submit' disabled>
          <span>Link Button</span>
        </Button>
        <Button variant='link' size="default" type='submit' disabled>Link Button</Button>
        <Button variant='link' size="sm" type='submit' disabled>Link Button</Button>
      </div>
    </div>
  </div>
}