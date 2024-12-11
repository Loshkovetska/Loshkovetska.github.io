import { z } from "zod";

const loginScheme = z.object({
  email: z.string().email("Wrong email"),
  password: z.string().min(6).max(8),
  remember: z.number().optional(),
});

export { loginScheme };
