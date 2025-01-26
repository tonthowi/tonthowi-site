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
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-zinc-100">
            Software designer specialising in improving design maturity.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Tonthowi Al Ahyar, a software designer (UI/UX) with <MonoText>7+</MonoText> years of experience designing digital products and websites for startups, brands, and B2B/Enterprises.
          </p>
        </div>
      </Container>
      <Container className="mt-24 sm:mt-32">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
          Featured Works
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:gap-x-8">
          {workCards.map((card) => (
            <article 
              key={card.id} 
              className="group relative overflow-hidden rounded-md shadow-sm shadow-zinc-100 dark:shadow-none bg-white dark:bg-zinc-950 ring-1 ring-zinc-100 dark:ring-zinc-950 hover:shadow-md hover:dark:shadow-none hover:shadow-zinc-200 transition duration-300"
            >
              <div className="w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1000}
                  height={1000}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col p-8 space-y-4 overflow-hidden">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    <MonoText>{card.year}</MonoText>
                  </p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{card.description}</p>
                <Button href={`/${card.id}`}>View Case Study →</Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}