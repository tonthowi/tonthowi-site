import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  DribbbleIcon,
} from '@/components/SocialIcons'
import { MonoText } from '@/components/MonoText'

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

function SocialLinkItem({ link }) {
  return (
    <li className={clsx(link.className, 'flex')}>
      <Link
        href={link.href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        aria-label={link.label}
      >
        <link.icon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{link.label}</span>
      </Link>
    </li>
  )
}

function SocialLinks() {
  const socialLinks = [
    { href: 'https://dribbble.com/tonthowi', label: 'Follow on Dribbble', icon: DribbbleIcon, className: 'mt-4' },
    { href: 'https://www.instagram.com/tonthowi_al/', label: 'Follow on Instagram', icon: InstagramIcon, className: 'mt-4' },
    { href: 'https://github.com/tonthowi', label: 'Follow on GitHub', icon: GitHubIcon, className: 'mt-4' },
    { href: 'https://www.linkedin.com/in/tonthowi-al-ahyar/', label: 'Follow on LinkedIn', icon: LinkedInIcon, className: 'mt-4' },
    {
      href: 'mailto:tonthowi@gmail.com',
      label: 'tonthowi@gmail.com',
      icon: MailIcon,
      className: 'mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h4 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span>Connect with Me</span>
      </h4>
      <ul role="list" className="mt-6 space-y-5">
        {socialLinks.map((link, index) => (
          <SocialLinkItem key={index} link={link} />
        ))}
      </ul>
    </div>
  )
}

function Role({ role }) {
  let startLabel = typeof role.start === 'string' ? role.start : role.start.label
  let startDate = typeof role.start === 'string' ? role.start : role.start.dateTime

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
          <MonoText>{role.title}</MonoText>
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}><MonoText>{startLabel}</MonoText></time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}><MonoText>{endLabel}</MonoText></time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  const resume = [
    {
      company: 'AccelByte',
      title: 'UX Designer',
      start: '2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Gomodo',
      title: 'Lead Designer',
      start: '2018',
      end: '2020',
    },
    {
      company: 'Mediatechindo',
      title: 'Lead Designer',
      start: '2014',
      end: '2018',
    },
    {
      company: 'Talikama Communications',
      title: 'Art Director',
      start: '2011',
      end: '2014',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h4 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span>Work Experience</span>
      </h4>
      <ol className="mt-6 space-y-4">
        {resume.map((role, index) => (
          <Role key={index} role={role} />
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
              src="/images/about-photo.png"
              width={550}
              height={550}
              alt="About Tonthowi Al Ahyar"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
             About Me
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My name is Tonthowi Al Ahyar. I&apos;m a UI Designer and Software Engineer, living in Bali.
            </p>
            <p>
              With over 8 years in tech, I have collaborated with big corporate clients, small startups, and micro-businesses, gaining a wide range of insights into digital transformation and business growth.
            </p>
            
            <p>
              Throughout my career, I have been involved in creating web apps, mobile apps, SaaS platforms, websites and e-commerce sites. My focus has always been making these digital products stand out and helping bussinesses sucessfully transition into the digital through design maturity.
            </p>
            <p>
            Currently work with <a 
              href="https://perfeqt.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-500 hover:text-indigo-300 font-semibold transition-colors duration-200">
              Perfeqt
            </a> as a Lead Designer for wellness and nutrition app with test taking feature.
            </p>
            <p>
            I&apos;m also building a tool called Pensive It!, to help overthinker, hoarder, and creative mind stashes and dumps their findings into a non-opinionated canvas quickly—no judgements.
            </p>
          </div>
        </div>
        <div className="space-y-5 lg:pl-16 xl:pl-24">
          <Resume />
          <SocialLinks />
        </div>
      </div>
    </Container>
  )
}