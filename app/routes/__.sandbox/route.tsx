import { Link, Outlet } from 'react-router';
import { Button } from '~/components/shadcn/ui/button';
import { Toaster } from '~/components/shadcn/ui/sonner';
import { Separator } from '~/components/shadcn/ui/separator';
import { ReactCallRoots } from '~/components/shared/react-call';

const SandBoxLayout = () => {
  return (
    <>
      <div className="my-4 mr-4 flex justify-center gap-4">
        <Link to="/">
          <Button variant="secondary" className="w-20">
            Home
          </Button>
        </Link>
        <Link to="/demo">
          <Button variant="secondary" className="w-20">
            Demo
          </Button>
        </Link>
      </div>
      <Separator />
      <div className="max-w-[68.75rem] mx-auto w-11/12">
        <Outlet />
        <Toaster />
        <ReactCallRoots />
      </div>
    </>
  );
};

export default SandBoxLayout;
