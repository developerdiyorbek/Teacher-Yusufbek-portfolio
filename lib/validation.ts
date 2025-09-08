import { z } from "zod";

export const contactSchema = z.object({
  message: z.string().min(5),
  email: z.string().email(),
  name: z.string().min(3),
});

export const contactActionSchema = z.object({
  message: z.string().min(1),
});
