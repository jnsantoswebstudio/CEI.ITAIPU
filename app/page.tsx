import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  CirclePlay,
  Clock3,
  HeartHandshake,
  Camera,
  MapPin,
  MessageCircle,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { links, schedule } from "@/lib/site-data";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Início",
  description:
    "Conheça o CEI Itaipu, confira os horários dos encontros, assista às mensagens e planeje sua visita.",
};

const quickLinks = [
  { href: "/programacao", icon: CalendarDays, label: "Ver programação", note: "Dias e horários" },
  { href: "/mensagens", icon: CirclePlay, label: "Assistir mensagens", note: "Canal oficial" },
  { href: "/contato", icon: MapPin, label: "Como chegar", note: "Itaipu, Niterói" },
];

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#332b2b] text-white">
        <div className="absolute inset-0 soft-grid opacity-[0.28]" aria-hidden="true" />
        <div className="absolute -right-36 -top-44 h-[34rem] w-[34rem] rounded-full bg-[#8a625b]/25 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-52 left-[35%] h-[32rem] w-[32rem] rounded-full bg-[#b89a5d]/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid min-h-[690px] max-w-[1240px] items-center gap-12 px-5 py-20 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:py-24">
          <div className="rise-in max-w-2xl">
            <p className="eyebrow !text-[#d8bd84]">Centro Evangelístico Internacional • Itaipu</p>
            <h1 className="font-display mt-7 text-[3.2rem] font-normal leading-[1.02] tracking-[-0.035em] text-[#fff9ec] sm:text-6xl lg:text-[4.65rem]">
              Fé que aproxima. <span className="text-[#d8bd84]">Comunhão</span> que transforma.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">
              Uma igreja a serviço do Reino, reunindo pessoas e famílias para viver a Palavra, crescer juntas e caminhar com propósito.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-13 rounded-full bg-[#e1c688] px-7 text-base font-bold text-[#332b2b] hover:bg-[#f0d99e]">
                <Link href="/contato">Planeje sua visita <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="h-13 rounded-full border-white/25 bg-white/5 px-7 text-base text-white hover:bg-white/12 hover:text-white">
                <Link href="/programacao">Ver programação</Link>
              </Button>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm text-white/54">
              <MapPin className="size-4 text-[#d8bd84]" /> Itaipu, Niterói — RJ
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[510px] lg:mx-0 lg:justify-self-end">
            <div className="surface-shadow relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#f5ecd7] p-5 text-[#332b2b] sm:p-7">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#725852]/15" aria-hidden="true" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#725852]/15" aria-hidden="true" />
              <div className="relative flex items-center justify-between border-b border-[#bba98a]/50 pb-5">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8a6a40]">Encontre seu momento</p>
                  <h2 className="font-display mt-2 text-3xl font-normal">Programação semanal</h2>
                </div>
                <Image src={withBasePath("/images/cei-logo.png")} alt="" width={76} height={76} unoptimized className="h-[70px] w-[70px] rounded-full object-cover shadow-md" />
              </div>

              <div className="relative mt-5 grid gap-3">
                {schedule.slice(0, 3).map((item) => (
                  <div key={`${item.day}-${item.time}`} className="flex items-center gap-4 rounded-2xl bg-white/72 p-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-full bg-[#725852] text-white"><Clock3 className="size-5" /></div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[#725852]">{item.day} • {item.time}</p>
                      <p className="mt-0.5 text-base font-semibold text-[#332b2b]">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild variant="ghost" className="relative mt-4 h-11 w-full justify-between rounded-xl text-[#5b433f] hover:bg-white/65 hover:text-[#5b433f]">
                <Link href="/programacao">Ver todos os horários <ChevronRight className="size-4" /></Link>
              </Button>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/15 bg-[#725852] px-5 py-4 text-white shadow-2xl sm:block">
              <p className="text-xs uppercase tracking-[0.16em] text-white/62">Nosso propósito</p>
              <p className="font-display mt-1 text-xl">Servir ao Reino</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 px-5 lg:px-8" aria-label="Acessos rápidos">
        <div className="surface-shadow mx-auto grid max-w-[1120px] overflow-hidden rounded-3xl border border-[#e2d8c8] bg-white md:grid-cols-3">
          {quickLinks.map(({ href, icon: Icon, label, note }, index) => (
            <Link key={href} href={href} className={`group flex items-center gap-4 p-5 transition hover:bg-[#faf5e9] sm:p-6 ${index < 2 ? "border-b border-[#e7dfd2] md:border-b-0 md:border-r" : ""}`}>
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#f1e6cd] text-[#725852] transition group-hover:bg-[#725852] group-hover:text-white"><Icon className="size-5" /></span>
              <span className="min-w-0 flex-1">
                <strong className="block text-base text-[#3b3533]">{label}</strong>
                <span className="mt-1 block text-sm text-[#766e69]">{note}</span>
              </span>
              <ChevronRight className="size-5 text-[#a9978d] transition group-hover:translate-x-1 group-hover:text-[#725852]" />
            </Link>
          ))}
        </div>
      </section>

      <section id="comunidade" className="scroll-mt-20 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[.92fr_1.08fr]">
          <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] bg-[#eadfc8] surface-shadow">
            <Image
              src={withBasePath("/images/worship-concept.jpg")}
              alt="Pessoas reunidas em um momento de louvor — imagem conceitual"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#302727]/85 via-transparent to-black/5" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="font-display text-2xl">Juntos por um propósito</p>
              <p className="mt-2 text-xs leading-5 text-white/68">Imagem conceitual • será substituída por fotografia oficial</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Uma igreja para caminhar junto</p>
            <h2 className="font-display mt-6 max-w-2xl text-4xl font-normal leading-tight tracking-[-0.025em] text-[#403735] sm:text-5xl">Um lugar de fé, Palavra e comunhão em Itaipu.</h2>
            <p className="mt-6 text-lg leading-8 text-[#6f6865]">O CEI Itaipu reúne pessoas e famílias em torno da fé cristã e do serviço ao Reino. Aqui você encontra uma programação para aprender, celebrar e construir relacionamentos.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: BookOpen, title: "Palavra", text: "Ensino para fortalecer a caminhada." },
                { icon: Users, title: "Comunhão", text: "Uma comunidade para viver junto." },
                { icon: HeartHandshake, title: "Serviço", text: "Fé que se expressa no cuidado." },
                { icon: Sparkles, title: "Propósito", text: "Uma vida direcionada ao Reino." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-[#e1d8ca] bg-white p-5">
                  <Icon className="size-5 text-[#9b7b3f]" />
                  <h3 className="font-display mt-4 text-xl text-[#443a38]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#766e69]">{text}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="link" className="mt-7 h-auto px-0 text-base font-bold text-[#725852] hover:text-[#5c4541]">
              <Link href="/sobre">Conheça mais sobre o CEI <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="programacao" className="scroll-mt-20 bg-[#f0e7d7] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Programação</p>
              <h2 className="font-display mt-5 text-4xl font-normal tracking-[-0.025em] text-[#403735] sm:text-5xl">Há um lugar para você.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#6d6561]">Escolha o melhor horário, abra a rota e venha viver esse momento conosco.</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {schedule.map((item, index) => (
              <article key={`${item.day}-${item.time}`} className={`rounded-[1.5rem] p-6 ${index === 2 ? "bg-[#725852] text-white" : "border border-[#dfd2bd] bg-[#fbf8f2] text-[#3e3735]"}`}>
                <p className={`text-xs font-extrabold uppercase tracking-[0.15em] ${index === 2 ? "text-[#e6cd97]" : "text-[#9b7b3f]"}`}>{item.day}</p>
                <p className="font-display mt-5 text-4xl">{item.time}</p>
                <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${index === 2 ? "text-white/68" : "text-[#776e69]"}`}>{item.note}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-[#766e69]">Horários consultados no Instagram oficial. Confirme a programação especial antes de sair.</p>
        </div>
      </section>

      <section id="mensagens" className="scroll-mt-20 overflow-hidden bg-[#382f2f] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow !text-[#d8bd84]">Mensagens que continuam com você</p>
            <h2 className="font-display mt-6 max-w-xl text-4xl font-normal leading-tight tracking-[-0.02em] text-[#fff9ec] sm:text-5xl">Leve a Palavra para todos os seus dias.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/66">Acompanhe as mensagens e conteúdos publicados pelo CEI Itaipu no canal oficial.</p>
            <Button asChild className="mt-8 h-13 rounded-full bg-[#e1c688] px-7 text-[#332b2b] hover:bg-[#f0d99e]">
              <a href={links.youtube} target="_blank" rel="noreferrer"><Video className="size-5" /> Acessar o YouTube</a>
            </Button>
          </div>

          <a href={links.youtube} target="_blank" rel="noreferrer" className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/12 bg-[#725852] p-7 surface-shadow sm:p-10">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-4 -top-10 h-48 w-48 rounded-full border border-white/10" />
            <div className="relative flex h-full min-h-[292px] flex-col justify-between">
              <div className="grid size-16 place-items-center rounded-full bg-white text-[#725852] transition group-hover:scale-105"><CirclePlay className="size-7" /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/56">Canal oficial</p>
                <p className="font-display mt-3 text-3xl text-white">CEI Itaipu no YouTube</p>
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#f0d99e]">Abrir canal <ArrowRight className="size-4 transition group-hover:translate-x-1" /></p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[980px]">
          <div className="text-center">
            <p className="eyebrow">Sua primeira visita</p>
            <h2 className="font-display mt-5 text-4xl font-normal tracking-[-0.025em] text-[#403735] sm:text-5xl">Chegar ficou mais simples.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { number: "01", title: "Escolha o horário", text: "Confira a programação e veja qual encontro combina com sua rotina." },
              { number: "02", title: "Abra a rota", text: "Use o mapa para chegar ao CEI Itaipu com tranquilidade." },
              { number: "03", title: "Fale com a equipe", text: "Se tiver alguma dúvida, use o canal de contato antes da visita." },
            ].map((step) => (
              <article key={step.number} className="rounded-[1.5rem] border border-[#e1d8ca] bg-white p-6">
                <span className="font-display text-3xl text-[#b89a5d]">{step.number}</span>
                <h3 className="mt-7 text-lg font-bold text-[#413a38]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#766e69]">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-full bg-[#725852] px-7 text-white hover:bg-[#604944]"><Link href="/contato">Planejar minha visita</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-[#cfc2b1] bg-transparent px-7 text-[#5a4743] hover:bg-white"><a href={links.maps} target="_blank" rel="noreferrer"><MapPin className="size-4" /> Abrir no mapa</a></Button>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e4dbcf] bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-[1060px] gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="font-display mt-5 text-4xl font-normal leading-tight text-[#403735]">Antes de vir, tire suas dúvidas.</h2>
            <p className="mt-5 text-base leading-7 text-[#756d68]">As respostas finais serão validadas com a equipe da igreja.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-[#e1d8ca]">
              <AccordionTrigger className="text-left text-base font-bold text-[#443a38] hover:no-underline">Preciso avisar antes da minha primeira visita?</AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-[#766e69]">Não é necessário para conhecer a igreja. Se desejar tirar alguma dúvida antes, use o canal de contato disponível no site.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-[#e1d8ca]">
              <AccordionTrigger className="text-left text-base font-bold text-[#443a38] hover:no-underline">Quais são os horários de domingo?</AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-[#766e69]">A programação pública informa EBD às 9h e cultos às 10h30 e 19h. Em datas especiais, confirme pelo Instagram oficial.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-[#e1d8ca]">
              <AccordionTrigger className="text-left text-base font-bold text-[#443a38] hover:no-underline">Posso acompanhar as mensagens pela internet?</AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-[#766e69]">Sim. O botão “Mensagens” leva ao canal oficial do CEI Itaipu no YouTube.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-[#e1d8ca]">
              <AccordionTrigger className="text-left text-base font-bold text-[#443a38] hover:no-underline">Há programação para crianças e jovens?</AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-[#766e69]">A lista de ministérios, faixas etárias e horários ainda precisa ser confirmada pela igreja para aparecer na versão oficial.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto overflow-hidden rounded-[2rem] bg-[#eadfc8] px-6 py-14 text-center soft-grid sm:px-10 lg:py-16">
          <p className="eyebrow">Continue perto durante a semana</p>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-4xl font-normal leading-tight text-[#403735] sm:text-5xl">Acompanhe o que está acontecendo no CEI Itaipu.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#6f6561]">Programações especiais, momentos da comunidade e mensagens nos canais oficiais.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-full bg-[#725852] px-7 text-white hover:bg-[#604944]"><a href={links.instagram} target="_blank" rel="noreferrer"><Camera className="size-5" /> Seguir no Instagram</a></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-[#bda987] bg-white/55 px-7 text-[#55413e] hover:bg-white"><a href={links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="size-5" /> Falar com a igreja</a></Button>
          </div>
        </div>
      </section>
    </main>
  );
}
