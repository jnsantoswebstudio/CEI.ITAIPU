"use client";

import { useState } from "react";
import { CheckCircle2, RotateCcw, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function VisitForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="grid min-h-[430px] place-items-center rounded-[1.75rem] border border-[#dfd3c3] bg-white p-8 text-center surface-shadow" aria-live="polite">
        <div className="max-w-sm">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#eee4cf] text-[#725852]"><CheckCircle2 className="size-8" /></span>
          <h2 className="font-display mt-6 text-3xl text-[#403735]">Formulário demonstrado.</h2>
          <p className="mt-4 leading-7 text-[#716966]">Nesta prévia, nenhum dado foi enviado. Na versão oficial, a mensagem poderá chegar ao canal definido pela igreja.</p>
          <Button type="button" variant="outline" onClick={() => setSubmitted(false)} className="mt-7 h-11 rounded-full border-[#cfc2b1] px-6 text-[#5a4743]">
            <RotateCcw className="size-4" /> Preencher novamente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-[1.75rem] border border-[#dfd3c3] bg-white p-6 surface-shadow sm:p-8"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#9b7b3f]">Planeje sua visita</p>
        <h2 className="font-display mt-3 text-3xl text-[#403735]">Vamos receber sua mensagem.</h2>
        <p className="mt-3 text-sm leading-6 text-[#756d68]">Preencha os dados abaixo para demonstrar como funcionará o contato.</p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="name">Seu nome</Label>
          <Input id="name" name="name" required autoComplete="name" placeholder="Como podemos chamar você?" className="h-12 border-[#d8cfc2] bg-[#fdfbf7]" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Celular</Label>
          <Input id="phone" name="phone" required inputMode="tel" autoComplete="tel" placeholder="(21) 99999-9999" className="h-12 border-[#d8cfc2] bg-[#fdfbf7]" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="visit">Quando pretende vir?</Label>
          <Input id="visit" name="visit" placeholder="Ex.: domingo, 10h30" className="h-12 border-[#d8cfc2] bg-[#fdfbf7]" />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="message">Dúvida ou mensagem</Label>
          <Textarea id="message" name="message" placeholder="Conte como podemos ajudar." className="min-h-28 resize-y border-[#d8cfc2] bg-[#fdfbf7]" />
        </div>
      </div>

      <Button type="submit" className="mt-6 h-12 w-full rounded-full bg-[#725852] text-base text-white hover:bg-[#604944]">
        Demonstrar envio <Send className="size-4" />
      </Button>
      <p className="mt-4 text-center text-xs leading-5 text-[#8a817d]">Demonstração: nenhum dado é armazenado ou enviado.</p>
    </form>
  );
}
