import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Camera, CirclePlay, Radio, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { links } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mensagens",
  description: "Acesse as mensagens e conteúdos oficiais do CEI Itaipu no YouTube e Instagram.",
};

export default function MessagesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Mensagens"
        title="A Palavra continua durante a semana."
        description="Assista às mensagens, acompanhe os encontros e compartilhe conteúdos do CEI Itaipu pelos canais oficiais."
      />

      <section id="conteudos" className="scroll-mt-20 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1120px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <a href={links.youtube} target="_blank" rel="noreferrer" className="group relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#725852] p-8 text-white surface-shadow sm:p-12">
            <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-12 h-60 w-60 rounded-full border border-white/10" />
            <div className="absolute inset-0 soft-grid opacity-20" />
            <div className="relative flex min-h-[404px] flex-col justify-between">
              <div className="grid size-20 place-items-center rounded-full bg-white text-[#725852] transition-transform group-hover:scale-105"><CirclePlay className="size-9" /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ead39f]">Canal oficial no YouTube</p>
                <h2 className="font-display mt-4 max-w-lg text-4xl leading-tight text-white sm:text-5xl">Assista quando e onde estiver.</h2>
                <p className="mt-5 flex items-center gap-2 text-sm font-bold text-[#f2dcaa]">Abrir o canal <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></p>
              </div>
            </div>
          </a>

          <div>
            <p className="eyebrow">Conteúdo que aproxima</p>
            <h2 className="font-display mt-6 text-4xl font-normal leading-tight text-[#403735] sm:text-5xl">Um ponto de encontro também no digital.</h2>
            <p className="mt-6 text-lg leading-8 text-[#706865]">O site organiza os acessos aos conteúdos oficiais e ajuda cada mensagem a continuar disponível além do dia do encontro.</p>
            <div className="mt-8 grid gap-4">
              {[
                { icon: BookOpen, title: "Pregações e Palavra", text: "Acesso direto ao canal onde a igreja publica suas mensagens." },
                { icon: Radio, title: "Cultos e momentos", text: "Um espaço para acompanhar registros e transmissões disponibilizados pela igreja." },
                { icon: Camera, title: "Agenda e comunidade", text: "Novidades, programações especiais e bastidores no Instagram oficial." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-[#e1d8ca] bg-white p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#eee3cc] text-[#725852]"><Icon className="size-5" /></span>
                  <div><h3 className="font-bold text-[#403735]">{title}</h3><p className="mt-1 text-sm leading-6 text-[#766e69]">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efe5d3] px-5 py-24 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Do presencial para o digital</p>
          <h2 className="font-display mt-5 text-4xl font-normal text-[#403735] sm:text-5xl">Conheceu uma mensagem? Venha viver a comunhão.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#716865]">Veja os horários da semana e escolha o melhor momento para sua visita.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-full bg-[#725852] px-7 text-white hover:bg-[#604944]"><Link href="/programacao">Ver programação <ArrowRight className="size-4" /></Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-[#c6b79e] bg-white/55 px-7 text-[#59433f] hover:bg-white"><a href={links.youtube} target="_blank" rel="noreferrer"><Video className="size-5" /> Acessar YouTube</a></Button>
          </div>
        </div>
      </section>
    </main>
  );
}
