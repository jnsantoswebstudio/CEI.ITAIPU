import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck2, Camera, Clock3, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { links, schedule } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Programação",
  description: "Confira os dias e horários da programação semanal do CEI Itaipu.",
};

export default function SchedulePage() {
  return (
    <main>
      <PageHero
        eyebrow="Programação"
        title="Escolha seu momento de estar conosco."
        description="Confira a programação semanal divulgada pelo CEI Itaipu e planeje sua visita com tranquilidade."
      />

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Agenda semanal</p>
              <h2 className="font-display mt-5 text-4xl font-normal text-[#403735] sm:text-5xl">Programação regular.</h2>
            </div>
            <div className="max-w-md rounded-2xl border border-[#ded3c2] bg-white p-4 text-sm leading-6 text-[#716865]">
              Os horários abaixo foram consultados no Instagram oficial. Programações especiais podem alterar a agenda.
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {schedule.map((item, index) => (
              <article key={`${item.day}-${item.time}`} className={`relative overflow-hidden rounded-[1.7rem] p-7 ${index === 2 ? "bg-[#725852] text-white surface-shadow" : "border border-[#e0d6c7] bg-white text-[#403735]"}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-extrabold uppercase tracking-[0.16em] ${index === 2 ? "text-[#e5cb93]" : "text-[#9b7b3f]"}`}>{item.day}</span>
                  <CalendarCheck2 className={`size-5 ${index === 2 ? "text-white/55" : "text-[#b59b68]"}`} />
                </div>
                <p className="font-display mt-8 text-5xl">{item.time}</p>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${index === 2 ? "text-white/68" : "text-[#746c68]"}`}>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe5d3] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-[1080px] gap-5 md:grid-cols-3">
          {[
            { icon: Clock3, title: "Chegue com calma", text: "Considere chegar alguns minutos antes do início da programação." },
            { icon: MapPin, title: "Abra a rota", text: "Use o mapa oficial para encontrar o melhor caminho até Itaipu." },
            { icon: Camera, title: "Confira novidades", text: "Veja no Instagram se haverá programação especial na data escolhida." },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-[1.5rem] bg-[#fbf8f2] p-6">
              <span className="grid size-12 place-items-center rounded-full bg-[#725852] text-white"><Icon className="size-5" /></span>
              <h3 className="font-display mt-6 text-2xl text-[#403735]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#746c68]">{text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-9 flex max-w-[1080px] flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="h-12 rounded-full bg-[#725852] px-7 text-white hover:bg-[#604944]"><Link href="/contato">Planeje sua visita <ArrowRight className="size-4" /></Link></Button>
          <Button asChild variant="outline" className="h-12 rounded-full border-[#c6b79e] bg-white/50 px-7 text-[#59433f] hover:bg-white"><a href={links.maps} target="_blank" rel="noreferrer"><MapPin className="size-4" /> Abrir localização</a></Button>
        </div>
      </section>
    </main>
  );
}
