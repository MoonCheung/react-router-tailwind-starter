import { Button } from '~/components/shadcn/ui/button';
import { showToast } from '~/components/shadcn/ui/sonner';

export default function ToastPage() {
  return <>
    <div className='mt-8'>
      <Button variant='default' size="default" type='submit' onClick={() => {
        showToast('This is a success toast!', {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }}>
        Show Toast
      </Button>
    </div>
  </>
}