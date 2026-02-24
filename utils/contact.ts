import * as z from "zod";

const phoneRegex = /^[0-9+()\-\s]{7,24}$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120, "Name is too long"),
  email: z.string().trim().email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .max(24, "Phone number is too long")
    .refine((value) => value.length === 0 || phoneRegex.test(value), {
      message: "Invalid phone number",
    })
    .optional(),
  company: z.string().trim().max(120, "Company name is too long").optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(3000, "Message is too long"),
  turnstileToken: z.string().min(1, "Please complete the verification challenge."),
  // Honeypot field: should stay empty for real users
  website: z.string().trim().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
