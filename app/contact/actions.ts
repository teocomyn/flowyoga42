"use server";

import { Resend } from "resend";
import {
  contactSchema,
  type ContactFormState,
} from "@/lib/validations/contact";
import { CONTACT, SITE_NAME } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? CONTACT.email;
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Flow Yoga <onboarding@resend.dev>";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Partial<
      Record<"name" | "email" | "phone" | "message", string>
    > = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (
        field === "name" ||
        field === "email" ||
        field === "phone" ||
        field === "message"
      ) {
        fieldErrors[field] = issue.message;
      }
    }
    return {
      success: false,
      message: "Veuillez corriger les champs indiqués.",
      fieldErrors,
    };
  }

  if (parsed.data.website) {
    return { success: true, message: "Message envoyé avec succès." };
  }

  const { name, email, phone, message } = parsed.data;

  if (!resend) {
    console.warn(
      "[Contact] RESEND_API_KEY manquant · message non envoyé:",
      { name, email, message: message.slice(0, 50) },
    );
    return {
      success: false,
      message:
        "Le formulaire n'est pas encore configuré. Contactez-nous par téléphone ou email.",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[${SITE_NAME}] Message de ${name}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        phone ? `Téléphone : ${phone}` : null,
        "",
        "Message :",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("[Contact] Resend error:", error);
      return {
        success: false,
        message: "Une erreur est survenue. Réessayez ou contactez-nous par téléphone.",
      };
    }

    return {
      success: true,
      message: "Merci ! Votre message a bien été envoyé. Floriane vous répondra rapidement.",
    };
  } catch (err) {
    console.error("[Contact] Unexpected error:", err);
    return {
      success: false,
      message: "Une erreur est survenue. Réessayez ou contactez-nous par téléphone.",
    };
  }
}
