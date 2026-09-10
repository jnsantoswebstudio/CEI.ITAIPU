import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#352d2d] px-5 py-20 text-white lg:px-8 lg:py-24">
      <div className="absolute inset-0 soft-grid opacity-[0.28]" aria-hidden="true" />
      <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#8b655e]/25 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1180px]">
        <nav className="flex items-center gap-2 text-sm text-white/48" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-white">Início</Link>
          <ChevronRight className="size-4" />
          <span className="text-[#dbc38f]">{eyebrow}</span>
        </nav>
        <div className="mt-10 max-w-3xl">
          <p className="eyebrow !text-[#d8bd84]">{eyebrow}</p>
          <h1 className="font-display mt-6 text-5xl font-normal leading-[1.04] tracking-[-0.035em] text-[#fff9ec] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{description}</p>
        </div>
      </div>
    </section>
  );
}
