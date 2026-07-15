import { Fragment } from "react";
import {
  SCHEDULE,
  SCHEDULE_DAYS,
  SCHEDULE_NOTE,
  type ScheduleEntry,
} from "@/content/schedule";

function ScheduleRow({ entry }: { entry: ScheduleEntry }) {
  return (
    <tr className="border-b border-sand-200">
      <td className="py-4 pr-4 text-[15px] text-ink-900">
        {entry.time} – {entry.endTime}
      </td>
      <td className="py-4 pr-4 text-[15px] text-ink-900">{entry.practice}</td>
      <td className="py-4 text-[15px] text-ink-600">{entry.location}</td>
    </tr>
  );
}

function MobileDayAccordion({
  day,
  entries,
}: {
  day: ScheduleEntry["day"];
  entries: ScheduleEntry[];
}) {
  if (entries.length === 0) return null;

  return (
    <details className="group border-b border-sand-200 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-[17px] font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
        <span>{day}</span>
        <span
          className="text-clay-400 transition-transform duration-300 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <ul className="mt-4 space-y-4">
        {entries.map((entry) => (
          <li
            key={`${entry.day}-${entry.time}-${entry.practice}`}
            className="rounded-2xl border border-sand-200 bg-sand-50 p-4"
          >
            <p className="text-[15px] font-medium text-ink-900">
              {entry.time} – {entry.endTime} · {entry.practice}
            </p>
            <p className="mt-1 text-[14px] text-ink-600">{entry.location}</p>
          </li>
        ))}
      </ul>
    </details>
  );
}

type ScheduleTableProps = {
  filterSlug?: string;
  showNote?: boolean;
};

export function ScheduleTable({
  filterSlug,
  showNote = true,
}: ScheduleTableProps) {
  const schedule = filterSlug
    ? SCHEDULE.filter((entry) => entry.slug === filterSlug)
    : SCHEDULE;

  const days = filterSlug
    ? ([...new Set(schedule.map((e) => e.day))] as ScheduleEntry["day"][])
    : [...SCHEDULE_DAYS];

  return (
    <div>
      {showNote && (
        <p className="prose-body mb-8 text-[15px]">{SCHEDULE_NOTE}</p>
      )}

      <div className="hidden overflow-hidden rounded-card border border-sand-200/80 md:block">
        <table className="w-full text-left">
          <caption className="sr-only">
            Planning hebdomadaire des cours de yoga à Saint-Just-Saint-Rambert
          </caption>
          <thead>
            <tr className="border-b border-sand-200">
              <th
                scope="col"
                className="pb-4 pr-4 text-[11px] font-medium tracking-[0.18em] text-ink-600 uppercase"
              >
                Horaire
              </th>
              <th
                scope="col"
                className="pb-4 pr-4 text-[11px] font-medium tracking-[0.18em] text-ink-600 uppercase"
              >
                Pratique
              </th>
              <th
                scope="col"
                className="pb-4 text-[11px] font-medium tracking-[0.18em] text-ink-600 uppercase"
              >
                Lieu
              </th>
            </tr>
          </thead>
          <tbody>
            {days.map((day) => {
              const dayEntries = schedule.filter((e) => e.day === day);
              if (dayEntries.length === 0) return null;

              return (
                <Fragment key={day}>
                  <tr className="bg-sand-100">
                    <th
                      scope="colgroup"
                      colSpan={3}
                      className="px-0 py-3 text-[11px] font-medium tracking-[0.18em] text-ink-600 uppercase"
                    >
                      {day}
                    </th>
                  </tr>
                  {dayEntries.map((entry) => (
                    <ScheduleRow
                      key={`${entry.day}-${entry.time}-${entry.practice}`}
                      entry={entry}
                    />
                  ))}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="md:hidden">
        {days.map((day) => (
          <MobileDayAccordion
            key={day}
            day={day}
            entries={schedule.filter((e) => e.day === day)}
          />
        ))}
      </div>
    </div>
  );
}
