import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Instagram, MessageCircle, Menu, X } from "lucide-react";

import hero from "@/assets/333.jpg";
import aline from "@/assets/aline.jpg";
import gr1 from "@/assets/gr1.jpg";
import gr3 from "@/assets/gr3.jpg";
import gr4 from "@/assets/gr4.jpg";
import gr5 from "@/assets/gr5.jpg";
import ap1 from "@/assets/111.jpg";
import ap2 from "@/assets/222.jpg";
import ap3 from "@/assets/333.jpg";
import logoDip from "@/assets/logo-dip.png";
import { CONTACT, whatsappLink } from "@/lib/contact";

const TITLE = "Aline Di Prado | dip. arquitetura + soluções — Goiânia";
const DESC =
  "Arquitetura residencial de alto padrão em Goiânia e online. Do terreno à decoração, com mais de 20 anos de experiência. Menos é luxo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo({ className = "" }: { className?: string }) {
  return <img src={logoDip} alt="dip. arquitetura" className={`aspect-square rounded-full ${className}`} />;
}

const NAV = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

const SERVICES = [
  { n: "01", t: "Casas do zero", d: "Do terreno à decoração: um projeto completo pensado para a rotina real de quem vai morar." },
  { n: "02", t: "Reformas", d: "Transformar o que já existe em um lugar com personalidade, funcional e acolhedor." },
  { n: "03", t: "Houseflipping", d: "Projetos estratégicos que valorizam o imóvel com decisões técnicas e investimento inteligente." },
  { n: "04", t: "Comercial", d: "Espaços que traduzem a identidade da marca e funcionam para quem trabalha e para quem visita." },
];

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const wa = whatsappLink();

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#topo" className="flex items-center gap-3" aria-label="Início">
            <Logo className="h-11 text-xl" />
            <span className="hidden text-sm tracking-wide sm:block">Aline Di Prado</span>
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="eyebrow text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
            <a href={wa} target="_blank" rel="noopener noreferrer" className="eyebrow border border-foreground px-5 py-3 transition-colors hover:bg-foreground hover:text-background">
              Orçar projeto
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-6 border-t border-border px-6 py-8 md:hidden">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display text-3xl">
                {n.label}
              </a>
            ))}
            <a href={wa} target="_blank" rel="noopener noreferrer" className="eyebrow mt-2 bg-primary px-5 py-4 text-center text-primary-foreground">
              Orçar pelo WhatsApp
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="topo" className="relative flex min-h-screen items-end overflow-hidden bg-wood text-wood-foreground">
        <img src={hero} alt="Sala integrada com painel de madeira, concreto aparente e mobiliário de design" className="animate-slow-zoom absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-wood via-wood/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28">
          <p className="eyebrow animate-hero-in mb-8 opacity-80">Arquitetura residencial · Goiânia · GO</p>
          <h1 className="animate-hero-in max-w-5xl text-5xl leading-[0.95] md:text-8xl" style={{ animationDelay: "0.15s" }}>
            Do terreno à decoração,<br />
            <em className="italic">alto padrão</em> ao seu alcance.
          </h1>
          <div className="animate-hero-in mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between" style={{ animationDelay: "0.35s" }}>
            <p className="max-w-md text-lg font-light opacity-85">
              Mais de 20 anos de experiência criando casas com personalidade — casas que funcionam e fazem sentido para quem mora nelas.
            </p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="group eyebrow inline-flex items-center gap-3 self-start bg-background px-7 py-5 text-foreground transition-colors hover:bg-stone">
              Orçar meu projeto
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <p className="eyebrow reveal mb-10 text-muted-foreground">Manifesto</p>
        <h2 className="reveal max-w-5xl text-4xl leading-tight md:text-7xl">
          Menos é <em className="italic text-primary">luxo</em>. Alto padrão é atenção aos detalhes que realmente importam.
        </h2>
      </section>

      {/* Projetos */}
      <section id="projetos" className="border-t border-border">
        {/* GR */}
        <article className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 grid gap-10 md:grid-cols-12">
            <div className="reveal md:col-span-5">
              <p className="eyebrow mb-6 text-muted-foreground">Projeto 01 · Residência</p>
              <h2 className="text-6xl md:text-8xl">Casa G|R</h2>
            </div>
            <div className="reveal space-y-5 text-lg font-light leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
              <p className="text-foreground">
                Arquitetura de interiores é quando uma casa deixa de ser apenas bonita e começa, de fato, a acolher a rotina de quem vive nela.
              </p>
              <p>
                Na residência GR, o desafio não era “preencher” um espaço amplo. Era transformar uma sala fria, alta e vazia em um ambiente aconchegante, sofisticado e funcional para o dia a dia da família.
              </p>
              <p>
                O painel em pedra natural aquece visualmente o pé-direito alto, a marcenaria organiza sem pesar, e a iluminação indireta cria conforto sem excessos.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-12">
            <Shot src={gr1} alt="Casa GR: painel em pedra natural, rack ripado em madeira e poltronas de couro" className="md:col-span-7 md:row-span-2" onOpen={setLightbox} />
            <Shot src={gr5} alt="Casa GR: antes e projeto da sala de pé-direito alto" className="md:col-span-5" onOpen={setLightbox} />
            <Shot src={gr3} alt="Casa GR: antes e projeto com estante iluminada em madeira" className="md:col-span-5" onOpen={setLightbox} />
            <Shot src={gr4} alt="Casa GR: antes e projeto do painel de TV em pedra com iluminação indireta" className="md:col-span-5 md:col-start-8" onOpen={setLightbox} />
            <blockquote className="reveal flex items-center md:col-span-6 md:col-start-1 md:row-start-3 md:pr-10">
              <p className="font-display text-3xl italic leading-snug md:text-4xl">
                “Luxo, pra mim, não está em exagerar. Está em fazer sentido para quem vai viver naquele ambiente.”
              </p>
            </blockquote>
          </div>
        </article>

        {/* Apartamento */}
        <article className="bg-wood py-24 text-wood-foreground md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 grid gap-10 md:grid-cols-12">
              <div className="reveal md:col-span-5">
                <p className="eyebrow mb-6 opacity-70">Projeto 02 · Apartamento</p>
                <h2 className="text-5xl leading-none md:text-7xl">Arquitetura com foco no cliente</h2>
              </div>
              <div className="reveal space-y-5 text-lg font-light leading-relaxed opacity-85 md:col-span-6 md:col-start-7">
                <p>
                  O objetivo foi traduzir a personalidade do jovem casal em escolhas claras: materiais modernos, obras de arte marcantes, mobiliário de design e uma composição que conversa com o estilo de vida deles — sem excesso e sem fórmulas prontas.
                </p>
                <p>
                  O resultado é um espaço com estética única, onde cada elemento foi escolhido a dedo e reforça a identidade dos moradores.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Shot src={ap1} alt="Apartamento: painel amadeirado, rack azul e sofá cinza" onOpen={setLightbox} />
              <Shot src={ap2} alt="Apartamento: detalhe de ambiente com mobiliário de design" className="md:mt-16" onOpen={setLightbox} />
              <Shot src={ap3} alt="Apartamento: estar e jantar integrados com concreto aparente e arte" onOpen={setLightbox} />
            </div>
          </div>
        </article>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-12 md:px-10 md:py-40">
        <div className="reveal img-zoom md:col-span-5">
          <img src={aline} alt="Retrato da arquiteta Aline Di Prado em seu escritório" loading="lazy" className="w-full object-cover" />
        </div>
        <div className="reveal flex flex-col justify-center md:col-span-6 md:col-start-7">
          <p className="eyebrow mb-8 text-muted-foreground">A arquiteta</p>
          <h2 className="mb-10 text-5xl leading-none md:text-7xl">
            Provavelmente não sou a arquiteta que você está imaginando.
          </h2>
          <div className="space-y-5 text-lg font-light leading-relaxed text-muted-foreground">
            <p>
              Meu nome é <span className="text-foreground">Aline Di Prado</span>, sou arquiteta de alto padrão. Não acredito que uma casa sofisticada precise ser cheia de coisas caras, nem que o revestimento mais caro seja sempre a melhor escolha. Muito menos que uma casa precise parecer um showroom.
            </p>
          </div>
          <ul className="mt-10 space-y-2 font-display text-3xl italic">
            <li>Casa com personalidade.</li>
            <li>Casa que funciona.</li>
            <li>Casa bonita, que faz sentido pra quem mora nela.</li>
          </ul>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-card py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="reveal mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-5xl md:text-7xl">Serviços</h2>
            <p className="max-w-sm font-light text-muted-foreground">
              Atendimento presencial em Goiânia e projetos de arquitetura online para todo o Brasil.
            </p>
          </div>
          <div className="border-t border-border">
            {SERVICES.map((s) => (
              <a key={s.n} href={whatsappLink(`Olá, Aline! Gostaria de conversar sobre um projeto de ${s.t.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="reveal group grid items-baseline gap-4 border-b border-border py-10 md:grid-cols-12">
                <span className="eyebrow text-muted-foreground md:col-span-1">{s.n}</span>
                <h3 className="text-4xl transition-transform duration-500 group-hover:translate-x-3 md:col-span-4 md:text-5xl">{s.t}</h3>
                <p className="font-light text-muted-foreground md:col-span-6">{s.d}</p>
                <ArrowUpRight className="hidden h-6 w-6 justify-self-end text-primary opacity-0 transition-opacity group-hover:opacity-100 md:col-span-1 md:block" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <p className="eyebrow reveal mb-14 text-muted-foreground">Como trabalho</p>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            ["Escuta", "Entender a rotina, os desejos e a personalidade de quem vai morar."],
            ["Decisão técnica", "Proporção, textura, iluminação e materiais escolhidos pelo que fazem sentido — não pelo preço."],
            ["Identidade", "Um resultado personalizado, coerente e funcional, sem fórmulas prontas."],
          ].map(([t, d], i) => (
            <div key={t} className="reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <span className="font-display text-6xl italic text-accent">{i + 1}.</span>
              <h3 className="mt-4 text-3xl">{t}</h3>
              <p className="mt-3 font-light text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-accent py-28 text-accent-foreground md:py-40">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
          <Logo className="reveal mx-auto mb-12 h-24 text-5xl" />
          <h2 className="reveal mx-auto max-w-4xl text-5xl leading-tight md:text-7xl">
            Deseja orçar o seu projeto?
          </h2>
          <p className="reveal mx-auto mt-8 max-w-xl text-lg font-light opacity-85">
            Entre em contato pelo WhatsApp e vamos juntos tirar sua casa do papel.
          </p>
          <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="eyebrow inline-flex items-center gap-3 bg-background px-8 py-5 text-foreground transition-colors hover:bg-stone">
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="eyebrow inline-flex items-center gap-3 border border-accent-foreground/50 px-8 py-5 transition-colors hover:bg-accent-foreground/10">
              <Instagram className="h-4 w-4" /> @alinediprado
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-wood py-12 text-wood-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm font-light md:flex-row md:px-10">
          <div className="flex items-center gap-3">
            <Logo className="h-10 text-lg" />
            <span>dip. arquitetura + soluções</span>
          </div>
          <span className="opacity-70">Aline Di Prado · Arquiteta · Goiânia, GO · Brasil</span>
          <span className="opacity-70">© {new Date().getFullYear()}</span>
        </div>
      </footer>

      {lightbox && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-wood/95 p-6" onClick={() => setLightbox(null)}>
          <button aria-label="Fechar" className="absolute right-6 top-6 text-wood-foreground">
            <X className="h-8 w-8" />
          </button>
          <img src={lightbox} alt="Imagem ampliada do projeto" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </div>
  );
}

function Shot({ src, alt, className = "", onOpen }: { src: string; alt: string; className?: string; onOpen: (s: string) => void }) {
  return (
    <button type="button" onClick={() => onOpen(src)} className={`reveal img-zoom block cursor-zoom-in ${className}`} aria-label={`Ampliar: ${alt}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </button>
  );
}
