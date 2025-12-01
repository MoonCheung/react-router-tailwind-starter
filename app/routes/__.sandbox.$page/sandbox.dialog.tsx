import { useState } from 'react';
import { Button } from '~/components/shadcn/ui/button';
import { Typography } from '~/components/shadcn/ui/typography';
import { AlertDialog } from '~/components/shared/react-call/alert-dialog';

export default function DialogPage() {
  const [response, setResponse] = useState<string>();

  const handleButtonClick = async () => {
    const res = await AlertDialog.call({
      title: 'Sample',
      message: 'Cancel or Continue?',
    })
    setResponse(res);
  }

  return <>
    <div className='mt-8'>
      <Typography as="h6" variant="h6">react-call sample</Typography>
      <Button variant='default' size="default" type='submit' onClick={
        async () => await handleButtonClick()
      }>Open Dialog!!!</Button>
    </div>
    <div className='mt-4'>response: {response}</div>
  </>
}