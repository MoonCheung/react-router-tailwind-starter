import type { Route } from './+types/route';
import { getFormProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { z } from 'zod';
import { useEffect } from 'react';
import { useFetcher, useNavigate } from "react-router"
import { Button } from '~/components/shadcn/ui/button';
import { Dialog } from '~/components/shadcn/ui/dialog';
import { showToast } from '~/components/shadcn/ui/sonner'
import { DialogContentNoCloseButton } from '~/components/shadcn/custom/dialog-content-no-close-button';
import { Label } from '~/components/shadcn/ui/label';
import { ConformInput } from '~/components/shared/conform/conform-input';
import { ConformTextarea } from '~/components/shared/conform/conform-textarea';
// import { commitSession, getSession } from '~/sessions.server';

const contactEditFormSchema = z.object({
  first: z.string({ required_error: 'First is required' }),
  last: z.string({ required_error: 'Last is required' }),
  twitter: z.string().optional(),
  avatar: z.string().url('Avatar must be a valid URL').optional(),
  notes: z.string().optional(),
});

const useContactEditForm = () => {
  const form = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactEditFormSchema });
    },
  });

  return form;
};

export default function ModalPage() {
  const [form, { first, last, twitter, avatar, notes }] = useContactEditForm();

  const fetcher = useFetcher();

  const navigate = useNavigate();

  return <>
    <div className='mt-8'>
      <Dialog open={true}>
        <DialogContentNoCloseButton className="max-w-2xl">
          <fetcher.Form 
            {...getFormProps(form)}
            method="post"
            className="grid grid-cols-[auto,1fr] items-center gap-4"
          >
            <Label className="w-32 md:w-40 text-right">Name</Label>
            <div className="flex gap-4">
              <ConformInput
                metadata={first}
                defaultValue=''
                aria-label="First name"
                name="first"
                placeholder="First"
                type="text"
              />
              <ConformInput
                metadata={last}
                defaultValue=''
                aria-label="Last name"
                name="last"
                placeholder="Last"
                type="text"
              />
            </div>
            <Label className="w-32 md:w-40 text-right">Twitter</Label>
            <ConformInput
              metadata={twitter}
              defaultValue=''
              name="twitter"
              placeholder="@jack"
              type="text"
            />
            <Label className="w-32 md:w-40 text-right">Avatar URL</Label>
            <ConformInput
              metadata={avatar}
              defaultValue=''
              aria-label="Avatar URL"
              name="avatar"
              placeholder="https://example.com/avatar.jpg"
              type="text"
            />
            <Label className="mt-2 self-start w-32 md:w-40 text-right">Notes</Label>
            <ConformTextarea
              metadata={notes}
              defaultValue=''
              name="notes"
              rows={6}
            />
            <div className="col-start-2 flex gap-4">
              <Button
                type="submit"
                disabled={
                  fetcher.state === 'submitting' || fetcher.state === 'loading'
                }
              >
                Save
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
            </div>
          </fetcher.Form>
        </DialogContentNoCloseButton>
      </Dialog>
    </div>
  </>
}