import { Link } from 'react-router';
import { Button } from '~/components/shadcn/ui/button';
import { Separator } from '~/components/shadcn/ui/separator';

const LinkButton = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link to={to} className="flex justify-center">
      <Button className="w-80">{label}</Button>
    </Link>
  );
};

const DemoPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-4 p-4">
        {/* <LinkButton to="/auth/login" label="Authentication" /> */}
        <LinkButton to="/sandbox" label="React Router Sandbox" />
        <Separator />
        <LinkButton to="/demo/graphql" label="GraphQL" />
      </div>
    </div>
  );
};

export default DemoPage;
