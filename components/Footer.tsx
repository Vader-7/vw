import Link from 'next/link'

import { Separator } from '../components/ui/separator'

export function Footer() {
  return (
    <div className='relative mx-auto min-w-fit'>
      <div className='space-y-1'>
        <p className='pt-5 text-xs font-medium text-black dark:text-white md:text-base'>
          Feel free to reach out to me on any of the platforms below.
        </p>
      </div>
      <Separator className='my-2' />
      <div className='flex h-4 items-center space-x-4 text-center text-sm font-medium subpixel-antialiased'>
        <div>
          <a href='https://github.com/Vader-7' target='_blank'>
            Github
          </a>
        </div>
        <Separator orientation='vertical' />
        <div>
          <a href='https://linkedin.com/in/tylermiranda/' target='_blank'>
            LinkedIn
          </a>
        </div>
        <Separator orientation='vertical' />
        <div>
          <a href='https://twitter.com/vader7w' target='_blank'>
            Twitter
          </a>
        </div>
        <Separator orientation='vertical' />
        <Link href='/' passHref className='flex items-center justify-center gap-1'>
          outside
        </Link>
      </div>
    </div>
  )
}
