import { Outlet } from 'react-router';

const SandBoxLayout = () => {
  return (
    <div className="max-w-[68.75rem] mx-auto w-11/12">
      <Outlet />
    </div>
  );
};

export default SandBoxLayout;
