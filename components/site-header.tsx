"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/site-data";
import { withBasePath } from "@/lib/base-path";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#d7ccbb]/70 bg-[#fbf8f2]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="CEI Itaipu — página inicial"
        >
          <Image
            src={withBasePath("/images/cei-logo.png")}
            alt="Logo do CEI Itaipu"
            width={52}
            height={52}
            unoptimized
            priority
            className="h-12 w-12 rounded-full object-cover shadow-sm"
          />
          <span className="leading-none">
            <strong className="font-display block text-[1.35rem] font-normal tracking-[0.05em] text-[#4b3936]">CEI</strong>
            <span className="mt-1 block text-[0.64rem] font-bold uppercase tracking-[0.26em] text-[#8a6a40]">Itaipu</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[0.92rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  active ? "bg-[#eadfc8] text-[#5b433f]" : "text-[#5f5956] hover:bg-white hover:text-[#4b3936]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="h-11 rounded-full bg-[#725852] px-6 text-white shadow-sm hover:bg-[#604944]">
            <Link href="/contato">Planeje sua visita</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-full border-[#d7ccbb] bg-white"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[88%] border-l-[#d7ccbb] bg-[#fbf8f2] p-0 sm:max-w-sm">
            <SheetHeader className="border-b border-[#ded4c5] px-6 py-6 text-left">
              <SheetTitle className="font-display text-2xl font-normal text-[#4b3936]">CEI Itaipu</SheetTitle>
              <SheetDescription>Encontre rapidamente o que você procura.</SheetDescription>
            </SheetHeader>
            <nav className="grid gap-2 px-4 py-6" aria-label="Navegação móvel">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-2xl px-4 py-3.5 text-base font-semibold ${
                      pathname === item.href ? "bg-[#eadfc8] text-[#5b433f]" : "text-[#4f4946] hover:bg-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="px-4">
              <SheetClose asChild>
                <Button asChild className="h-12 w-full rounded-full bg-[#725852] text-white hover:bg-[#604944]">
                  <Link href="/contato">Planeje sua visita</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
