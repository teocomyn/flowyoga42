import {
  formatPrice,
  formatPricePerSession,
  isEarlyBirdActive,
  type PricingPlan,
} from "@/content/tarifs";
import { ReservationButton } from "@/components/ui/Button";
import { EarlyBirdBadge } from "@/components/ui/EarlyBirdBadge";

type PricingCardProps = {
  plan: PricingPlan;
  recommended?: boolean;
  ctaLocation: string;
};

export function PricingCard({
  plan,
  recommended = false,
  ctaLocation,
}: PricingCardProps) {
  const earlyBird = isEarlyBirdActive();
  const currentPrice = earlyBird ? plan.priceEarlyBird : plan.priceRegular;
  const pricePerSession = formatPricePerSession(currentPrice, plan.sessions);
  const hasEarlyBirdDiscount =
    earlyBird && plan.priceEarlyBird < plan.priceRegular;

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-card p-8 shadow-[0_16px_40px_rgba(28,26,23,0.06)] ${
        recommended
          ? "border border-clay-400/60 bg-sand-100"
          : "surface-card"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        {recommended && (
          <span className="pill-tag text-clay-600">Recommandé</span>
        )}
        {hasEarlyBirdDiscount && <EarlyBirdBadge />}
      </div>

      <h3 className="mt-4 font-serif text-2xl tracking-tight">{plan.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
        {plan.description}
      </p>

      <div className="mt-8">
        <p className="font-serif text-4xl tracking-tight text-ink-900">
          {formatPrice(currentPrice)}
        </p>
        <p className="mt-2 text-[15px] text-clay-600">{pricePerSession}</p>
        {hasEarlyBirdDiscount && (
          <p className="mt-1 text-[14px] text-ink-600 line-through">
            {formatPrice(plan.priceRegular)} après le 27/09
          </p>
        )}
        <p className="label mt-4">{plan.validity}</p>
      </div>

      <div className="mt-auto pt-8">
        <ReservationButton location={ctaLocation} className="w-full" />
      </div>
    </article>
  );
}
