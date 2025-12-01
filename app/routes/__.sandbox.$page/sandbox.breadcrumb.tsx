import { Link } from 'react-router';
import { Typography } from '~/components/shadcn/ui/typography';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '~/components/shadcn/ui/breadcrumb';

export default function BreadcrumbsPage() {
  return <>
    <div className='mt-8'>
      <Typography as='h6' variant='h6'>
        Breadcrumb
      </Typography>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to="/sandbox">
              <BreadcrumbLink>Sandbox</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Remix Tutorial</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </> 
}