import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { StyleguideAnimations } from "@/components/styleguide/StyleguideAnimations";
import { Button, ReservationButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: {
    index: false,
    follow: false,
  },
};

const COLORS = [
  { name: "sand-50", token: "sand-50", hex: "#FBF9F5", role: "Fond principal" },
  { name: "sand-100", token: "sand-100", hex: "#F4EFE7", role: "Fond secondaire" },
  { name: "sand-200", token: "sand-200", hex: "#E8DFD1", role: "Filets, bordures" },
  { name: "clay-400", token: "clay-400", hex: "#C4A88A", role: "Accent chaud, CTA" },
  { name: "clay-600", token: "clay-600", hex: "#9A7B5A", role: "Accent hover" },
  { name: "moss-500", token: "moss-500", hex: "#6B7A5E", role: "CTA secondaire" },
  { name: "moss-700", token: "moss-700", hex: "#45503C", role: "Accent végétal foncé" },
  { name: "ink-900", token: "ink-900", hex: "#1C1A17", role: "Texte principal" },
  { name: "ink-600", token: "ink-600", hex: "#5A544C", role: "Texte secondaire" },
] as const;

const SPACING = [
  { name: "Section", value: "clamp(6rem, 12vw, 12rem)", usage: "py sections" },
  { name: "Container X", value: "clamp(1.5rem, 5vw, 6rem)", usage: "padding latéral" },
  { name: "Gouttière", value: "24px", usage: "grille 12 colonnes" },
  { name: "Max width", value: "1440px", usage: "conteneur" },
] as const;

function ColorSwatch({
  name,
  token,
  hex,
  role,
}: {
  name: string;
  token: string;
  hex: string;
  role: string;
}) {
  const isDark = token.startsWith("ink") || token === "moss-700";

  return (
    <div className="flex flex-col gap-3">
      <div
        className="flex h-28 items-end border border-sand-200 p-4"
        style={{ backgroundColor: hex }}
      >
        <span
          className={`font-mono text-[12px] ${isDark ? "text-sand-50" : "text-ink-900"}`}
        >
          {hex}
        </span>
      </div>
      <div>
        <p className="text-[15px] font-medium text-ink-900">{name}</p>
        <p className="text-[14px] text-ink-600">{role}</p>
        <p className="mt-1 font-mono text-[12px] text-ink-600">bg-{token}</p>
      </div>
    </div>
  );
}

function StyleguideSection({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 py-[var(--spacing-section)]">
      <Container>
        <p className="label mb-6">{label}</p>
        <h2 className="font-serif">{title}</h2>
        <div className="divider mt-10" />
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <div className="pb-[var(--spacing-section)] pt-32">
      <Container>
        <p className="label mb-6">Interne · noindex</p>
        <h1 className="font-serif">Design system</h1>
        <p className="prose-body mt-6">
          Flow Yoga · magazine de bien-être. Palette sand/clay/moss, typo
          Fraunces + Inter Tight, animations Motion discrètes.
        </p>
        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2" aria-label="Sections du styleguide">
          {[
            ["#couleurs", "Couleurs"],
            ["#typographie", "Typographie"],
            ["#boutons", "Boutons"],
            ["#filets", "Filets"],
            ["#espacements", "Espacements"],
            ["#grille", "Grille"],
            ["#animations", "Animations"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="label transition-colors hover:text-clay-600"
            >
              {label}
            </a>
          ))}
        </nav>
      </Container>

      <StyleguideSection id="couleurs" label="01" title="Couleurs">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {COLORS.map((color) => (
            <ColorSwatch key={color.token} {...color} />
          ))}
        </div>
        <p className="prose-body mt-12">
          Fond <code className="text-ink-900">sand-50</code> partout · jamais
          blanc pur. Texte <code className="text-ink-900">ink-900</code> ·
          jamais noir. L&apos;accent{" "}
          <code className="text-ink-900">clay-400</code> reste rare et précieux.
        </p>
      </StyleguideSection>

      <StyleguideSection id="typographie" label="02" title="Typographie">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <p className="label mb-8">Titres · Fraunces</p>
            <div className="space-y-12">
              <div>
                <p className="mb-3 font-mono text-[12px] text-ink-600">
                  H1 · clamp(2.75rem, 7vw, 6rem) · leading 0.95
                </p>
                <p className="font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em]">
                  Yoga à Saint-Just-Saint-Rambert
                </p>
              </div>
              <div>
                <p className="mb-3 font-mono text-[12px] text-ink-600">
                  H2 · clamp(2rem, 5vw, 3.5rem)
                </p>
                <p className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-[-0.03em]">
                  Cours de vinyasa
                </p>
              </div>
              <div>
                <p className="mb-3 font-mono text-[12px] text-ink-600">
                  H3 · clamp(1.5rem, 3vw, 2rem)
                </p>
                <p className="font-serif text-[clamp(1.5rem,3vw,2rem)] leading-[1.1] tracking-[-0.03em]">
                  Première fois ?
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="label mb-8">Corps · Inter Tight</p>
            <p className="prose-body">
              Flow Yoga est un studio de yoga tenu par Floriane Relave Jamon, à
              deux pas de la Loire. Cours collectifs du mardi au vendredi, 13
              élèves maximum. Chaque séance est préparée selon l&apos;énergie du
              groupe.
            </p>
            <p className="label mt-10 mb-4">Label / sur-titre</p>
            <p className="label">Saint-Just-Saint-Rambert · Loire (42)</p>
            <p className="mt-6 font-mono text-[12px] text-ink-600">
              11px · uppercase · tracking 0.18em · ink-600
            </p>
          </div>
        </div>
      </StyleguideSection>

      <StyleguideSection id="boutons" label="03" title="Boutons">
        <div className="flex flex-wrap items-center gap-6">
          <ReservationButton location="styleguide" />
          <Button href="/cours" variant="secondary">
            Découvrir les cours
          </Button>
          <Button href="/contact" variant="ghost">
            Nous contacter
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border border-sand-200 p-6">
            <p className="label mb-3">Primaire</p>
            <p className="text-[14px] text-ink-600">
              clay-400 · pill · « Réserver un cours » · unique sur tout le site
            </p>
          </div>
          <div className="border border-sand-200 p-6">
            <p className="label mb-3">Secondaire</p>
            <p className="text-[14px] text-ink-600">
              moss-500 outline · navigation interne
            </p>
          </div>
          <div className="border border-sand-200 p-6">
            <p className="label mb-3">Ghost</p>
            <p className="text-[14px] text-ink-600">
              sand-200 border · actions tertiaires
            </p>
          </div>
        </div>
      </StyleguideSection>

      <StyleguideSection id="filets" label="04" title="Filets">
        <div className="max-w-2xl space-y-8">
          <p className="prose-body">
            Séparateurs 1px sand-200. Pas de box-shadow, pas de border-radius
            (sauf images 2px et boutons pill).
          </p>
          <hr className="divider" />
          <p className="text-[14px] text-ink-600">.divider · 1px sand-200</p>
          <hr className="divider" />
        </div>
      </StyleguideSection>

      <StyleguideSection id="espacements" label="05" title="Espacements">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SPACING.map((space) => (
            <div
              key={space.name}
              className="flex items-start justify-between border border-sand-200 p-6"
            >
              <div>
                <p className="text-[15px] font-medium text-ink-900">
                  {space.name}
                </p>
                <p className="text-[14px] text-ink-600">{space.usage}</p>
              </div>
              <p className="font-mono text-[13px] text-clay-600">{space.value}</p>
            </div>
          ))}
        </div>
      </StyleguideSection>

      <StyleguideSection id="grille" label="06" title="Grille">
        <p className="prose-body mb-10">
          12 colonnes · gouttière 24px · max-width 1440px · padding latéral
          clamp(1.5rem, 5vw, 6rem).
        </p>
        <div className="grid grid-cols-12 gap-6">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="col-span-1 flex h-16 items-center justify-center border border-sand-200 bg-sand-100 text-[11px] text-ink-600"
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 border border-clay-400 bg-sand-100 p-4 md:col-span-5">
            <p className="label">Texte · 5 col</p>
          </div>
          <div className="col-span-12 border border-sand-200 bg-sand-100 p-4 md:col-span-6 md:col-start-7">
            <p className="label">Image · 6 col décalée</p>
          </div>
        </div>
      </StyleguideSection>

      <StyleguideAnimations />
    </div>
  );
}
