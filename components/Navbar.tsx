import { CodeXmlIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <nav className='border-b border-gray-200 bg-white'>
      <div className='container mx-auto flex justify-between h-16 items-center px-4'>
        <Link
          href={'/'}
          className='flex items-center gap-2 text-xl font-semibold text-primary'
        >
          <CodeXmlIcon />
          JobTrackR
        </Link>

        <div className='flex items-center gap-4'>
          <Link href='/sign-in'>
            <Button
              variant='ghost'
              className='text-gray-700 hover:text-black cursor-pointer'
            >
              Log In
            </Button>
          </Link>
          <Link href='/sign-up'>
            <Button className='hover:bg-primary/90 cursor-pointer'>
              Start for free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
