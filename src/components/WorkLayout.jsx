'use client';

import { useRouter } from 'next/navigation';
import { MonoText } from './MonoText';

export function WorkLayout({ title, role, description, deliverables, year, link, children }) {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="lg:w-72">
          <div className="sticky top-8 p-4 rounded-2xl bg-white dark:bg-zinc-950 ring-1 ring-zinc-100 dark:ring-zinc-900 shadow-sm dark:shadow-none">
            <div className="space-y-8">
              <button
                type="button"
                onClick={() => router.push('/')}
                aria-label="Go back to homepage"
                className="group flex items-center text-sm text-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                ← Back to Homepage
              </button>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {title}
                </h1>
                {description && (
                  <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                    {description}
                  </p>
                )}
                <dl className="mt-6 space-y-4 divide-y divide-zinc-100 dark:divide-zinc-800">
                  {role && (
                    <div className="pt-4 first:pt-0">
                      <dt className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-400">
                        <MonoText tabular={false}>Role</MonoText>
                      </dt>
                      <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                        {role}
                      </dd>
                    </div>
                  )}
                  {deliverables && (
                    <div className="pt-4">
                      <dt className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-400">
                        <MonoText tabular={false}>Deliverables</MonoText>
                      </dt>
                      <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                        {deliverables}
                      </dd>
                    </div>
                  )}
                  {year && (
                    <div className="pt-4">
                      <dt className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-400">
                        <MonoText tabular={false}>Year</MonoText>
                      </dt>
                      <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                        {year}
                      </dd>
                    </div>
                  )}
                  {link && (
                    <div className="pt-4">
                      <dt className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-400">
                        <MonoText tabular={false}>Link</MonoText>
                      </dt>
                      <dd className="mt-1 text-sm text-zinc-900 dark:text-white">
                        <a href={`https://${link}`} target="_blank" rel="noopener noreferrer" className="underline">
                          {link}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <article className="prose dark:prose-invert prose-zinc lg:prose-lg max-w-none">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}