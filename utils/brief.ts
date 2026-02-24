import * as z from "zod";

export const PROJECT_TYPES = [
  "Social Content",
  "Campaign",
  "Production",
  "Strategy",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "< $5k",
  "$5k - $10k",
  "$10k - $50k",
  "$50k+",
  "Not sure",
] as const;

export const TIMELINES = ["ASAP", "1-3 Months", "3-6 Months", "Flexible"] as const;

export const briefSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120, "Name is too long"),
  email: z.string().trim().email("Invalid email address"),
  company: z.string().trim().max(120, "Company name is too long").optional(),
  projectType: z.enum(PROJECT_TYPES, {
    message: "Please select a project type",
  }),
  budget: z.enum(BUDGET_RANGES, {
    message: "Please select a budget range",
  }),
  description: z
    .string()
    .trim()
    .min(10, "Tell us a bit more about the project")
    .max(3000, "Description is too long"),
  timeline: z.enum(TIMELINES, {
    message: "Please select a timeline",
  }),
  source: z
    .string()
    .trim()
    .max(120, "Source is too long")
    .optional(),
  turnstileToken: z.string().min(1, "Please complete the verification challenge."),
  // Honeypot field: should stay empty for real users
  website: z.string().trim().max(0).optional(),
});

export type BriefFormData = z.infer<typeof briefSchema>;
