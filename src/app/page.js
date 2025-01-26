import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from "next/image";
import { Container } from '@/components/Container';
import Button from "@/components/Button";

export default async function Home() {
  const worksDirectory = path.join(process.cwd(), 'src/contents/works');
  const workFiles = fs.readdirSync(worksDirectory);

  // Parse the content of each `.mdx` file to extract metadata
  const workCards = workFiles.map((filename) => {
    const filePath = path.join(worksDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent); // Extract frontmatter
    return {
      id: filename.replace('.mdx', ''),
      ...data,
    };
  });

  return (
    <>
      <Container className="mt-7">
        <div className="max-w-3xl">
          <h1 className="text-4xl tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
            Software designer specialising in improving design maturity.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I'm Tonthowi Al Ahyar, a software designer (UI/UX) with 7+ years of experience designing digital products and websites for startups, brands, and B2B/Enterprises.
          </p>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto">
          <h4 className="flex flex-col lg:flex-row mb-6 gap-0 lg:gap-2">
            Featured Works
          </h4>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            {workCards.map((card) => (
              <div
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
                    <h3 className="text-2xl">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-400">{card.year}</p>
                  </div>
                  <p className="text-sm text-zinc-600">{card.description}</p>
                  <Button className="w-fit" href={`/${card.id}`}>
                    View Case Study →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}