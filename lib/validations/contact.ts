import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(100, "Le nom est trop long."),
  email: z
    .string()
    .email("Adresse email invalide.")
    .max(254, "L'email est trop long."),
  phone: z
    .string()
    .max(20, "Le numéro est trop long.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères.")
    .max(2000, "Le message est trop long."),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormState = {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormData, string>>;
};

export const initialContactState: ContactFormState = {
  success: false,
  message: "",
};
