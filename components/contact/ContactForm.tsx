"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { initialContactState } from "@/lib/validations/contact";

const inputStyles =
  "w-full border border-sand-200 bg-sand-50 px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-600/50 transition-colors focus:border-clay-400";

const labelStyles = "label mb-2 block";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactState,
  );

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className={labelStyles}>
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className={inputStyles}
          aria-invalid={!!state.fieldErrors?.name}
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
        />
        {state.fieldErrors?.name && (
          <p id="name-error" className="mt-2 text-[14px] text-clay-600" role="alert">
            {state.fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelStyles}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className={inputStyles}
          aria-invalid={!!state.fieldErrors?.email}
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
        />
        {state.fieldErrors?.email && (
          <p id="email-error" className="mt-2 text-[14px] text-clay-600" role="alert">
            {state.fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className={labelStyles}>
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className={inputStyles}
          aria-invalid={!!state.fieldErrors?.phone}
        />
        {state.fieldErrors?.phone && (
          <p className="mt-2 text-[14px] text-clay-600" role="alert">
            {state.fieldErrors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${inputStyles} resize-y`}
          aria-invalid={!!state.fieldErrors?.message}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className="mt-2 text-[14px] text-clay-600" role="alert">
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      {state.message && (
        <p
          className={`text-[15px] ${state.success ? "text-moss-700" : "text-clay-600"}`}
          role={state.success ? "status" : "alert"}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full border border-clay-400 bg-clay-400 px-6 py-3 text-[15px] font-medium text-ink-900 transition-colors hover:bg-clay-600 hover:text-sand-50 disabled:opacity-60 md:w-auto"
      >
        {pending ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
