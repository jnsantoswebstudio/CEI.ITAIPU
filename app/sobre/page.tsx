import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Quem somos",
  description: "Conheça a essência, o propósito e a liderança do CEI Itaipu, em Niterói.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Quem somos"
        title="Juntos por um propósito."
        description="Uma comunidade cristã em Itaipu que busca viver a Palavra, fortalecer relacionamentos e servir ao Reino de Deus."
      />

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow">Nossa essência</p>
            <h2 className="font-display mt-6 text-4xl font-normal leading-tight tracking-[-0.025em] text-[#403735] sm:text-5xl">Uma igreja a serviço do Reino.</h2>
            <p className="mt-6 text-lg leading-8 text-[#706865]">O CEI Itaipu é um espaço de fé e comunhão para pessoas e famílias da Região Oceânica de Niterói. Sua comunicação pública destaca uma caminhada conjunta, orientada pela Palavra e pelo propósito.</p>
            <p className="mt-5 text-lg leading-8 text-[#706865]">Nesta página, a versão final poderá contar a história da igreja, apresentar sua missão e mostrar de forma clara como cada pessoa pode participar.</p>
            <div className="mt-8 rounded-2xl border border-[#dfd5c6] bg-[#f3ead6] p-5 text-sm leading-6 text-[#6b5c56]">
              A história institucional, o ano de fundação e a declaração oficial de missão e valores precisam ser confirmados pela liderança antes da publicação.
            </div>
          </div>

          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#eadfc8] soft-grid">
            <div className="absolute inset-8 rounded-[1.6rem] border border-[#725852]/15" />
            <div className="absolute inset-0 grid place-items-center p-8 text-center">
              <div>
                <Image src={withBasePath("/images/cei-logo.png")} alt="Logo do CEI Itaipu" width={270} height={270} unoptimized className="mx-auto h-56 w-56 rounded-full object-cover shadow-xl" />
                <p className="font-display mt-7 text-2xl text-[#523f3b]">CEI Itaipu</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#927345]">Centro Evangelístico Internacional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <p className="eyebrow">O que orienta nossa caminhada</p>
            <h2 className="font-display mt-5 text-4xl font-normal text-[#403735] sm:text-5xl">Fé vivida em comunidade.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BookOpen, title: "Palavra", text: "Aprender, refletir e aplicar os ensinamentos cristãos no dia a dia." },
              { icon: Users, title: "Comunhão", text: "Caminhar perto, compartilhar experiências e fortalecer vínculos." },
              { icon: HeartHandshake, title: "Serviço", text: "Colocar dons e disposição a serviço do Reino e das pessoas." },
              { icon: ShieldCheck, title: "Propósito", text: "Viver a fé com direção, responsabilidade e constância." },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[1.5rem] border border-[#e2d9cc] bg-[#fcfaf6] p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#eee3cc] text-[#725852]"><Icon className="size-5" /></span>
                <h3 className="font-display mt-6 text-2xl text-[#433936]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#766e69]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-[1080px] overflow-hidden rounded-[2rem] bg-[#382f2f] text-white md:grid-cols-[.85fr_1.15fr]">
          <div className="grid min-h-[320px] place-items-center bg-[#725852] p-8 soft-grid">
            <div className="text-center">
              <span className="mx-auto grid size-20 place-items-center rounded-full border border-white/20 bg-white/10"><Users className="size-8 text-[#efd89f]" /></span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/55">Liderança</p>
            </div>
          </div>
          <div className="p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d8bd84]">Pastor titular</p>
            <h2 className="font-display mt-4 text-4xl text-[#fff9ec]">Pr. Fernando Fernandes</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/66">O perfil oficial do CEI Itaipu identifica o Pr. Fernando Fernandes como pastor titular. Biografia, formação e fotografia oficial serão adicionadas após autorização da igreja.</p>
            <Button asChild variant="link" className="mt-6 h-auto px-0 text-[#efd89f] hover:text-white">
              <Link href="/contato">Conheça a igreja pessoalmente <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
