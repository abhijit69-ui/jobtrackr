'use client';

import { CodeXmlIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import { signOut, useSession } from '@/lib/auth/auth-client';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
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
          {session?.user ? (
            <>
              <Link href={'/dashboard'}>
                <Button
                  variant={'outline'}
                  className='text-gray-700 hover:text-black cursor-pointer'
                >
                  Dashboard
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className='cursor-pointer h-8 w-8'>
                    <AvatarFallback className='bg-primary text-white'>
                      {session?.user.name[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align='end'
                  sideOffset={12}
                  className='w-64 p-2 rounded-xl shadow-lg'
                >
                  <DropdownMenuLabel className='px-3 py-2'>
                    <div className='flex flex-col space-y-1'>
                      <p className='text-sm font-medium'>
                        {session?.user.name}
                      </p>
                      <p className='text-xs text-muted-foreground truncate'>
                        {session?.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className='cursor-pointer rounded-md px-3 py-2 text-sm hover:bg-muted'
                    onClick={async () => {
                      await signOut();
                      router.push('/sign-in');
                    }}
                  >
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href='/sign-in'>
                <Button
                  variant='outline'
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
