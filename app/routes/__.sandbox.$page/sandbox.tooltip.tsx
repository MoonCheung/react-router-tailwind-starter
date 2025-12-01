import { Button } from '~/components/shadcn/ui/button';
import { Tooltip, TooltipTrigger, TooltipContent } from '~/components/shadcn/ui/tooltip';


export default function TooltipPage(){
  return <>
    <div className='mt-8'> 
      <Tooltip>
        <TooltipTrigger>
          <Button variant='default' size="default" type='submit'>
            Hover me
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          This is a tooltip example using ShadCN UI!
        </TooltipContent>
      </Tooltip>
    </div>
  </>
}