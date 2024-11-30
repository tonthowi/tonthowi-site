import Image from "next/image";
import { Container } from '@/components/Container';
import { Button } from "@/components/Button";

const workCards = [
  {
    id: 1,
    imageSrc: "/images/perfeqt-thumb.png",
    imageAlt: "Perfeqt thumbnail image",
    logoSrc: "/images/perfeqt-logo.svg",
    logoAlt: "Perfeqt Logo",
    title: "Designing Wellness Tracker Testing App",
    year: "2023",
    description: "In a super early-stage startup, I designed a mobile app to check your body wellness using a urine test strip.",
    caseStudyLink: "#",
  },
  {
    id: 2,
    imageSrc: "/images/gamestark-thumb.png",
    imageAlt: "Gamestark thumbnail image",
    logoSrc: "/images/gamestark-logo.svg",
    logoAlt: "Gamestark Logo",
    title: "Redesign Account Connection Service",
    year: "2024",
    description: "This is a remake project focuses on redesigning a B2B software that integrates third-party accounts as an authentication method for client's app.",
    caseStudyLink: "#",
  },
];

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
          <h2 className="flex flex-col lg:flex-row mb-6 text-xl font-medium tracking-tight gap-0 lg:gap-2 text-zinc-600">
            Featured Works
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {workCards.map((card) => (
              <div key={card.id} className="group relative overflow-hidden">
                <div className="w-full overflow-hidden rounded-md">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    layout="responsive"
                    width={1000}
                    height={1000}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col mt-8 space-y-4 overflow-hidden">
                  {/* Render SVG or Image based on logoSrc type */}
                  {typeof card.logoSrc === "string" ? (
                    <Image
                      src={card.logoSrc}
                      alt={card.logoAlt}
                      layout="intrinsic"
                      width={80}
                      height={80}
                    />
                  ) : (
                    <card.logoSrc className="h-10 w-10" aria-label={card.logoAlt} />
                  )}
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-400">{card.year}</p>
                  </div>
                  <p className="text-sm text-zinc-600">
                    {card.description}
                  </p>
                  <Button className="w-fit" href={card.caseStudyLink}>
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