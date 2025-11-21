import { Link } from 'react-router';
import { Welcome } from './components/welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function AppPage() {
  return (
    <>
      <Welcome />
      <div className="flex justify-center">
        <div className="flex flex-col gap-4">
          <Link to="/sandbox" className="flex justify-center">
            React Router V7 SandBox
          </Link>
        </div>
      </div>
    </>
  );
}
