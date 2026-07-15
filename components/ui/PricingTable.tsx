import {
  ADULTES_PLANS,
  ENFANTS_PLANS,
  INDIVIDUEL_PLANS,
  PRENATAL_PLANS,
  STRUCTURES_INFO,
  ZOOM_PLANS,
  formatPrice,
  formatPricePerSession,
  isEarlyBirdActive,
  type PricingPlan,
} from "@/content/tarifs";

type PricingTableSectionProps = {
  title: string;
  plans: PricingPlan[];
};

function PricingTableSection({ title, plans }: PricingTableSectionProps) {
  const earlyBird = isEarlyBirdActive();

  return (
    <div className="mt-12">
      <h3 className="font-serif text-xl tracking-tight">{title}</h3>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[560px] text-left">
          <caption className="sr-only">Tarifs {title} · Flow Yoga</caption>
          <thead>
            <tr className="border-b border-sand-200">
              <th
                scope="col"
                className="pb-3 pr-4 text-[11px] font-medium tracking-[0.18em] text-ink-600 uppercase"
              >
                Formule
              </th>
              <th
                scope="col"
                className="pb-3 pr-4 text-[11px] font-medium tracking-[0.18em] text-ink-600 uppercase"
              >
                Early bird
              </th>
              <th
                scope="col"
                className="pb-3 pr-4 text-[11px] font-medium tracking-[0.18em] text-ink-600 uppercase"
              >
                Après 27/09
              </th>
              <th
                scope="col"
                className="pb-3 text-[11px] font-medium tracking-[0.18em] text-ink-600 uppercase"
              >
                Prix / séance
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => {
              const currentPrice = earlyBird
                ? plan.priceEarlyBird
                : plan.priceRegular;
              return (
                <tr
                  key={plan.id}
                  className="border-b border-sand-200"
                >
                  <th
                    scope="row"
                    className="py-4 pr-4 text-[15px] font-normal text-ink-900"
                  >
                    {plan.title}
                    <span className="mt-1 block text-[13px] text-ink-600">
                      {plan.validity}
                    </span>
                  </th>
                  <td className="py-4 pr-4 text-[15px] text-ink-900">
                    {formatPrice(plan.priceEarlyBird)}
                  </td>
                  <td className="py-4 pr-4 text-[15px] text-ink-600">
                    {formatPrice(plan.priceRegular)}
                  </td>
                  <td className="py-4 text-[15px] font-medium text-clay-600">
                    {formatPricePerSession(currentPrice, plan.sessions)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PricingTableFull() {
  const featuredIds = new Set(["unite", "10-seances", "30-seances"]);
  const additionalAdultes = ADULTES_PLANS.filter((p) => !featuredIds.has(p.id));

  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between border border-sand-200 px-6 py-4 text-[15px] font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
        <span>Voir tous les tarifs détaillés</span>
        <span
          className="text-clay-400 transition-transform duration-300 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>

      <div className="border border-t-0 border-sand-200 p-6 md:p-8">
        {additionalAdultes.length > 0 && (
          <PricingTableSection
            title="Adultes présentiel · autres formules"
            plans={additionalAdultes}
          />
        )}
        <PricingTableSection title="Zoom" plans={ZOOM_PLANS} />
        <PricingTableSection title="Prénatal" plans={PRENATAL_PLANS} />
        <PricingTableSection title="Enfants" plans={ENFANTS_PLANS} />
        <PricingTableSection
          title="Individuel & Duo"
          plans={INDIVIDUEL_PLANS}
        />

        <div className="mt-12 border border-sand-200 p-6">
          <h3 className="font-serif text-xl tracking-tight">
            {STRUCTURES_INFO.title}
          </h3>
          <p className="mt-3 text-[15px] text-ink-600">
            {STRUCTURES_INFO.description}
          </p>
          <p className="mt-2 text-[15px] font-medium text-ink-900">
            {STRUCTURES_INFO.priceRange}
          </p>
        </div>
      </div>
    </details>
  );
}
