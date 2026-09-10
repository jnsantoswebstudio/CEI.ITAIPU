import type { Metadata } from "next";
import { ArrowUpRight, Camera, Clock3, MapPin, MessageCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { VisitForm } from "@/components/visit-form";
import { links } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contato e localização",
  description: "Planeje sua visita ao CEI Itaipu, abra a localização e acesse os canais oficiais.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contato"
        title="Sua visita começa aqui."
        description="Encontre a localização, confira os horários e use o canal mais fácil para falar com o CEI Itaipu."
      />

      <section id="planeje-visita" className="scroll-mt-20 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[.92fr_1.08fr]">
          <div>
            <p className="eyebrow">Planeje seu caminho</p>
            <h2 className="font-display mt-5 text-4xl font-normal leading-tight text-[#403735] sm:text-5xl">Estamos em Itaipu, Niterói.</h2>
            <p className="mt-5 text-lg leading-8 text-[#706865]">Abra a rota no mapa fornecido pela igreja e confira a programação antes de sair.</p>

            <div className="mt-8 grid gap-4">
              <a href={links.maps} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-[1.4rem] border border-[#dfd5c7] bg-white p-5 transition hover:border-[#bda987]">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#eee3cc] text-[#725852]"><MapPin className="size-5" /></span>
                <span className="min-w-0 flex-1"><strong className="block text-[#403735]">Estrada Francisco da Cruz Nunes</strong><span className="mt-1 block text-sm text-[#766e69]">Itaipu, Niterói – RJ • número a confirmar</span></span>
                <ArrowUpRight className="size-5 text-[#a78f68] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-[1.4rem] border border-[#dfd5c7] bg-white p-5 transition hover:border-[#bda987]">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#eee3cc] text-[#725852]"><MessageCircle className="size-5" /></span>
                <span className="min-w-0 flex-1"><strong className="block text-[#403735]">Falar com a igreja</strong><span className="mt-1 block text-sm text-[#766e69]">Canal de WhatsApp presente no Linktree oficial</span></span>
                <ArrowUpRight className="size-5 text-[#a78f68] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="flex items-center gap-4 rounded-[1.4rem] border border-[#dfd5c7] bg-white p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#eee3cc] text-[#725852]"><Clock3 className="size-5" /></span>
                <span><strong className="block text-[#403735]">Atendimento</strong><span className="mt-1 block text-sm text-[#766e69]">Dias e horários de atendimento a confirmar</span></span>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="h-11 rounded-full border-[#cfc2b1] bg-transparent text-[#5a4743] hover:bg-white"><a href={links.instagram} target="_blank" rel="noreferrer"><Camera className="size-4" /> Instagram</a></Button>
              <Button asChild variant="outline" className="h-11 rounded-full border-[#cfc2b1] bg-transparent text-[#5a4743] hover:bg-white"><a href={links.youtube} target="_blank" rel="noreferrer"><Video className="size-4" /> YouTube</a></Button>
            </div>
          </div>

          <VisitForm />
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto overflow-hidden rounded-[2rem] border border-[#d8cdbd] bg-[#eee3cc] p-6 soft-grid sm:p-10">
          <div className="grid min-h-[330px] place-items-center rounded-[1.5rem] border border-[#725852]/15 bg-[#fbf8f2]/70 px-6 text-center">
            <div className="max-w-xl">
              <MapPin className="mx-auto size-9 text-[#725852]" />
              <h2 className="font-display mt-5 text-3xl text-[#403735] sm:text-4xl">Mapa integrado na versão final</h2>
              <p className="mt-4 text-base leading-7 text-[#716865]">Após a confirmação do endereço completo, o mapa poderá aparecer diretamente nesta área, mantendo também o botão para abrir a rota.</p>
              <Button asChild className="mt-7 h-12 rounded-full bg-[#725852] px-7 text-white hover:bg-[#604944]"><a href={links.maps} target="_blank" rel="noreferrer">Abrir localização atual <ArrowUpRight className="size-4" /></a></Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
