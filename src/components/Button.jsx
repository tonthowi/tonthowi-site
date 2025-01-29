import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'border-2 border-zinc-900 font-semibold uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-zinc-100 active:bg-zinc-900 active:text-zinc-100/90 dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 dark:active:text-zinc-900/90',
  secondary:
    'border border-zinc-300 font-medium text-zinc-900 hover:border-zinc-900 active:border-zinc-900/90 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-100 dark:active:border-zinc-100/90',
}

export default function Button({ variant = 'primary', className, children, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-3 px-5 text-sm outline-offset-2 transition-all duration-200 active:transition-none group',
    variantStyles[variant],
    className,
  )

  // Check if children contains an arrow and wrap it for animation
  const content = typeof children === 'string' && children.includes('→') 
    ? children.split('→').map((part, index) => 
        index === 0 
          ? part 
          : <span key="arrow" className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
      )
    : children;

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props}>
      {content}
    </button>
  ) : (
    <Link className={className} {...props}>
      {content}
    </Link>
  )
}
