import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from "next/image";
import { Container } from '@/components/Container';
import Button from "@/components/Button";
import { MonoText } from '@/components/MonoText';

export default async function Home() {
  const worksDirectory = path.join(process.cwd(), 'src/contents/works');
  const workCards = fs.readdirSync(worksDirectory)
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(worksDirectory, filename), 'utf-8');
      const { data } = matter(fileContent);
      return {
        id: filename.replace('.mdx', ''),
        ...data,
      };
    });

  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-zinc-900 dark:text-zinc-100">
            Tonthowi Al Ahyar
          </h1>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            User Interface Designer with <span className='font-semibold'>8+</span> years of experience designing digital products and websites for startups, brands, and B2B/Enterprises.
          </p>
        </div>
      </Container>
      <Container className="mt-24 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:gap-y-20">
          {workCards.map((card) => (
            <article 
              key={card.id} 
              className="group relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8"
            >
              <div className="relative aspect-[3/3] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 lg:aspect-[3/3]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1000}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {card.title}
                </h3>
                {/* <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                  {card.description}
                </p> */}
                <div className="mt-6">
                  <Button href={`/${card.id}`} variant="secondary">
                    View Project →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}