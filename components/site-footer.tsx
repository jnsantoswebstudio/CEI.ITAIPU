import Image from "next/image";
import Link from "next/link";
import { Camera, CirclePlay, MapPin, Share2 } from "lucide-react";
import { links, navItems } from "@/lib/site-data";
import { withBasePath } from "@/lib/base-path";

export function SiteFooter() {
  return (
    <footer className="bg-[#302d2d] text-white">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 md:grid-cols-[1.2fr_.8fr_.9fr] lg:px-8">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <Image
              src={withBasePath("/images/cei-logo.png")}
              alt="Logo do CEI Itaipu"
              width={58}
              height={58}
              unoptimized
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-2xl text-[#f4e7c7]">CEI Itaipu</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">Centro Evangelístico Internacional</p>
            </div>
          </div>
          <p className="mt-5 text-[0.98rem] leading-7 text-white/68">Uma igreja a serviço do Reino. Juntos por um propósito.</p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#d5b878]">Explore</p>
          <nav className="mt-5 grid gap-3" aria-label="Links do rodapé">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="w-fit text-[0.95rem] text-white/70 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#d5b878]">Conecte-se</p>
          <p className="mt-5 flex items-start gap-3 text-[0.95rem] leading-6 text-white/70">
            <MapPin className="mt-0.5 size-5 shrink-0 text-[#d5b878]" />
            Estrada Francisco da Cruz Nunes, Itaipu, Niterói – RJ
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { href: links.instagram, label: "Instagram", icon: Camera },
              { href: links.youtube, label: "YouTube", icon: CirclePlay },
              { href: links.facebook, label: "Facebook", icon: Share2 },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-[#d5b878]/60 hover:text-[#f4e7c7]"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs tracking-wide text-white/45">
        Conceito visual não oficial — JN Santos Web Studio
      </div>
    </footer>
  );
}
