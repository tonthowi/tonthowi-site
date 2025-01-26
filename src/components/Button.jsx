import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-zinc-900 font-semibold uppercase tracking-widest text-zinc-100 hover:bg-zinc-800 active:bg-zinc-900 active:text-zinc-100/90 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:active:bg-zinc-100 dark:active:text-zinc-900/90',
  secondary:
    'bg-zinc-100 font-semibold uppercase tracking-widest text-zinc-900 hover:bg-zinc-200 active:bg-zinc-100 active:text-zinc-900/90 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-zinc-100 dark:active:bg-zinc-800 dark:active:text-zinc-100/90',
}

export default function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-3 px-5 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
