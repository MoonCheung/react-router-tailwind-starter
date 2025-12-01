import { Textarea } from '~/components/shadcn/ui/textarea';
import { Typography } from '~/components/shadcn/ui/typography';

export default function TextareaPage(){
  return <>
    <div className='mt-8'>
      <Typography as='h6' variant='h6' className='mb-2'>
        Textarea
      </Typography>
      <Textarea>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum similique mollitia, at ea ut neque aliquam, blanditiis accusantium incidunt quaerat optio doloribus maiores tempore fugit architecto, voluptas magnam nesciunt alias!
      </Textarea>
    </div>
  </>
}