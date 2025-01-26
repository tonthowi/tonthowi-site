import Link from 'next/link'
import Image from 'next/image'

export default function Card({ title, description, slug, image }) {
  return (
    <div className="group relative flex flex-col items-start">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
        <Link href={`/works/${slug}`}>
          <Image
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            width={500}
            height={300}
          />
          <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-zinc-900/20 transition-colors duration-150" />
        </Link>
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Link href={`/works/${slug}`}>{title}</Link>
      </h2>
      {description && (
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  )
} 