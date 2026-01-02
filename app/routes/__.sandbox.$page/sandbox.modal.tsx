import type { Route } from './+types/route';
import { getFormProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { z } from 'zod';
import { useFetcher, useNavigate, useLoaderData } from "react-router"
import { Button } from '~/components/shadcn/ui/button';
import { Dialog } from '~/components/shadcn/ui/dialog';
import { DialogContentNoCloseButton } from '~/components/shadcn/custom/dialog-content-no-close-button';
import { Label } from '~/components/shadcn/ui/label';
import { ConformInput } from '~/components/shared/conform/conform-input';
import { ConformTextarea } from '~/components/shared/conform/conform-textarea';

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
  const { contact } = useLoaderData()
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
            <Label className="text-right">Name</Label>
            <div className="flex gap-4">
              <ConformInput
                metadata={first}
                aria-label="First name"
                defaultValue={contact.first}
                name="first"
                placeholder="First"
                type="text"
              />
              <ConformInput
                metadata={last}
                aria-label="Last name"
                defaultValue={contact.last}
                name="last"
                placeholder="Last"
                type="text"
              />
            </div>
            <Label className='text-right'>Twitter</Label>
            <ConformInput
              metadata={twitter}
              defaultValue={contact.twitter}
              name="twitter"
              placeholder="@jack"
              type="text"
            />
            <Label className='text-right'>Avatar URL</Label>
            <ConformInput
              metadata={avatar}
              aria-label="Avatar URL"
              defaultValue={contact.avatar}
              name="avatar"
              placeholder="https://example.com/avatar.jpg"
              type="text"
            />
            <Label className="mt-2 self-start text-right">Notes</Label>
            <ConformTextarea
              metadata={notes}
              defaultValue={contact.notes ?? ''}
              name="notes"
              rows={6}
            />
            <div className="col-start-2 flex gap-4">
              <Button
                type="submit"
                onClick={() => navigate(-1)}
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