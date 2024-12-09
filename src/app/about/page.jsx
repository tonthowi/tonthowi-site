import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

const socialLinks = [
  { href: '#', label: 'Follow on X', icon: XIcon, className: 'mt-4' },
  { href: '#', label: 'Follow on Instagram', icon: InstagramIcon, className: 'mt-4' },
  { href: '#', label: 'Follow on GitHub', icon: GitHubIcon, className: 'mt-4' },
  { href: '#', label: 'Follow on LinkedIn', icon: LinkedInIcon, className: 'mt-4' },
  {
    href: 'mailto:tonthowi@gmail.com',
    label: 'tonthowi@gmail.com',
    icon: MailIcon,
    className: 'mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40',
  },
]

function Role({ role }) {
    let startLabel =
      typeof role.start === 'string' ? role.start : role.start.label
    let startDate =
      typeof role.start === 'string' ? role.start : role.start.dateTime
  
    let endLabel = typeof role.end === 'string' ? role.end : role.end.label
    let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime
  
    return (
      <li className="flex gap-4">
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.company}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd
            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            aria-label={`${startLabel} until ${endLabel}`}
          >
            <time dateTime={startDate}>{startLabel}</time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={endDate}>{endLabel}</time>
          </dd>
        </dl>
      </li>
    )
  }
  
  function Resume() {
    let resume = [
      {
        company: 'Planetaria',
        title: 'CEO',
        start: '2019',
        end: {
          label: 'Present',
          dateTime: new Date().getFullYear().toString(),
        },
      },
      {
        company: 'Airbnb',
        title: 'Product Designer',
        start: '2014',
        end: '2019',
      },
      {
        company: 'Facebook',
        title: 'iOS Software Engineer',
        start: '2011',
        end: '2014',
      },
      {
        company: 'Starbucks',
        title: 'Shift Supervisor',
        start: '2008',
        end: '2011',
      },
    ]
  
    return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <span className="ml-3">Work Experience</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
      </div>
    )
  }

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/images/self-portrait.png"
              width={200}
              height={200}
              alt=""
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Tonthowi Al Ahyar. I live in Bali 🏖️, where all the digital nomads.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember, and wrote
              my first program when I was 6 years old, just two weeks after my
              mom brought home the brand new Macintosh LC 550 that I taught
              myself to type on.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p>
              I spent the next few summers indoors working on a rocket design,
              while I recovered from the multiple surgeries it took to fix my
              badly broken legs. It took nine iterations, but when I was 15 I
              sent my dad’s Blackberry into orbit and was able to transmit a
              photo back down to our family computer from space.
            </p>
            <p>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really <em>can</em> make
              it to orbit — from the comfort of their own backyards.
            </p>
          </div>
        </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
          <Resume />
          <ul role="list" className='className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"'>
            {socialLinks.map(({ href, label, icon, className }, index) => (
              <SocialLink
                key={index}
                href={href}
                icon={icon}
                className={className}
              >
                {label}
              </SocialLink>
            ))}
          </ul>
          </div>
      </div>
    </Container>
  )
}