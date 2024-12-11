import { z } from "zod";

const loginScheme = z.object({
  email: z.string().email("Wrong email"),
  password: z.string().min(6).max(8),
  remember: z.number().optional(),
});

const contactScheme = z.object({
  email: z.string().email("Wrong email"),
  name: z.string().min(3),
  comment: z.string().min(10),
});

export { contactScheme, loginScheme };
