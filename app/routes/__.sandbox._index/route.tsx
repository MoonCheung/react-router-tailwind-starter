import type { Route } from './+types/sandbox'
import { Link } from 'react-router';
import { Button } from '~/components/shadcn/ui/button';

export function meta({}: Route.MetaArgs) {
  return [{ name: 'description', content: 'Welcome to React Router Sandbox!' }]
}

const SandBoxPage = () => {
  return (
    <main>
      <div className="relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
        <div className='mt-6'>
          Sandbox:
          <div className='mt-2 flex flex-wrap justify-center gap-2'>
            {sandbox.map(({ title, route }) => (
              <Button key={route} variant='outline'>
                <Link key={route} to={route}>{title}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SandBoxPage;

//#region  //*=========== Sandbox ===========
const sandbox = [
  {
    title: 'Button',
    route: '/sandbox/button',
  },
  {
    title: 'Typography',
    route: '/sandbox/typography'
  },
  {
    title: 'Breadcrumb',
    route: '/sandbox/breadcrumb'
  },
  {
    title: 'Card',
    route: '/sandbox/card'
  },
  {
    title: 'Tooltip',
    route: '/sandbox/tooltip'
  },
  {
    title: 'Textarea',
    route: '/sandbox/textarea'
  },
  {
    title: 'Toast',
    route: '/sandbox/toast'
  },
  {
    title: 'Dialog',
    route: '/sandbox/dialog'
  },
  {
    title: 'Modal',
    route: '/sandbox/modal'
  },
];
//#endregion  //*======== Sandbox ===========
