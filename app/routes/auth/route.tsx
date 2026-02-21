import type { Route } from './+types/route';
import { Form, Outlet, redirect } from 'react-router';
import { Button } from '~/components/shadcn/ui/button';
import { destroySession, getSession } from '~/sessions.server';

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  const user = session.get('user');
  console.log('loader user:', user);
  return user;
}

export const action = async ({ request }: Route.ActionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));  
  return redirect('/auth/login', {
    headers: { 'Set-Cookie': await destroySession(session) },
  });
}

const AuthLayout = ({ loaderData }: Route.ComponentProps) => {
  const user = loaderData;

  return (
    <>
      <div className='flex items-center justify-center gap-4 p-4'>
        <h1>{`Hello ${user?.name} 先生/女士`}</h1>
        {user?.image && (
          <img
            src={user.image}
            alt={user.name}
            className="h-10 w-10 rounded-full"
          />
        )}
        <Form method="post">
          <Button type="submit" name="action" value="logout">
            Logout
          </Button>
        </Form>
      </div>
      <Outlet />
    </>
  )
}

export default AuthLayout;