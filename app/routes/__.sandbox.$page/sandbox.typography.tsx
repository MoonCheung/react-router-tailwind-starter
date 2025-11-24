import * as React from 'react';
import { Typography } from '~/components/shadcn/ui/typography';

export default function TypographyPage() {
  return <>
    <div className='mt-8'>
      <Typography as='h1' variant='h1'>
        Jumbo 1 <span className='italic'>Jumbo 1</span>
      </Typography>
      <Typography as='h2' variant='h2'>
        Jumbo 2 <span className='italic'>Jumbo 2</span>
      </Typography>
      <Typography variant='h3' as='h3'>
        Heading 1 <span className='italic'>Heading 1</span>
      </Typography>
      <Typography variant='h4' as='h4'>
        Heading 2 <span className='italic'>Heading 2</span>
      </Typography>
      <Typography variant='h5' as='h5'>
        Heading 3 <span className='italic'>Heading 3</span>
      </Typography>
      <Typography variant='h6' as='h6'>
        Heading 4 <span className='italic'>Heading 4</span>
      </Typography>
      <Typography variant='h7' as='p'>
        Heading 5 <span className='italic'>Heading 5</span>
      </Typography>
      <Typography variant='h8' as='p'>
        Heading 6 <span className='italic'>Heading 6</span>
      </Typography>
    </div>

    <div className='mt-8'>
      <Typography variant='h6' as='h1' color='default'>
        default
      </Typography>
      <Typography variant='h6' as='h1' color='destructive'>
      destructive
      </Typography>
      <Typography variant='h6' as='h1' color='secondary'>
        secondary
      </Typography>
    </div>

    <div className='mt-8'>
      <Typography
        // No need to assign variant, use the class
        className='h3 sm:h2 md:h1 lg:j1'
      >
        Responsive
      </Typography>
    </div>
  </> 
}