'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from './Button';

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WorkLayout({ title, role, team, logo, description, deliverables, children }) {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="sm:w-full lg:w-1/3">
          <div className="sticky top-20 space-y-8">
            <button
              type="button"
              onClick={() => router.push('/')}
              aria-label="Go back to homepage"
              className="group flex items-center justify-center text-sm text-zinc-600 hover:text-zinc-400 rounded-full transition py-2"
            >
              ← Back to Homepage
            </button>
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white">
                {title}
              </h1>
              {description && (
                <p className="py-6 text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              )}
              {role && (
                <div className="py-3 text-sm text-zinc-600 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-700">
                  <div className="flex flex-row">
                    <p className="w-full font-semibold">Role</p>
                    <p className="w-full text-right">{role}</p>
                  </div>
                </div>
              )}
              {deliverables && (
                <div className="py-3 text-sm text-zinc-600 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-700">
                  <div className="flex flex-row">
                    <p className="w-full font-semibold">Deliverables</p>
                    <p className="w-full text-right">{deliverables}</p>
                  </div>
                </div>
              )}
              {team && (
                <div className="py-3 text-sm text-zinc-600 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-700">
                  <div className="flex flex-row">
                    <p className="w-full font-semibold">Team</p>
                    <p className="w-full text-right">{team}</p>
                  </div>
                </div>
              )}
               {logo && (
                <div className="py-3 text-sm text-zinc-600 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-700">
                  <div className="flex flex-row">
                    <p className="w-full font-semibold">Client</p>
                    <Image
                      src={typeof logo === 'string' ? logo : logo[0]}
                      width={80}
                      height={80}
                      alt="Client Logo"
                      style={{ width: 'auto', height: '20px' }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1">
          <article className="prose dark:prose-invert max-w-none">{children}</article>
        </main>
      </div>
    </div>
  );
}