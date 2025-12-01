import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '~/components/shadcn/ui/card';

export default function CardPage() {
  return <>
    <div className='mt-8'>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            This is a description for the card component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          This is the main content area of the card. You can put any content you like here, such as text, images, or other components.
        </CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </div>
  </>
}