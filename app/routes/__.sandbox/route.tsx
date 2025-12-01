import { Outlet } from 'react-router';
import { Toaster } from '~/components/shadcn/ui/sonner';
import { ReactCallRoots } from '~/components/shared/react-call';

const SandBoxLayout = () => {
  return (
    <div className="max-w-[68.75rem] mx-auto w-11/12">
      <Outlet />
      <Toaster />
      <ReactCallRoots />
    </div>
  );
};

export default SandBoxLayout;
