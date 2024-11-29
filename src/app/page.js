import Image from "next/image";
import { Container } from '@/components/Container'

export default function Home() {
  return (
    <>
      <Container className="mt-7">
      <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software designer specialising in improving design maturity.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I’m Tonthowi Al Ahyar, a software designer (UI/UX) with 10+ years of experience in B2B/Enterprise and consumer app designs.
          </p>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            <div className="group relative overflow-hidden">
              <div className="w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/perfeqt-thumb.png"
                    alt="Illustration 1"
                    width={1000}
                    height={1000}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />               
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
