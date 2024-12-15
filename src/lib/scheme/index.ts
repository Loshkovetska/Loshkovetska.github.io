import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "video/mp4",
];

const loginScheme = z.object({
  email: z.string().email("Wrong email"),
  password: z.string().min(6).max(8),
  remember: z.boolean().optional(),
});

const contactScheme = z.object({
  email: z.string().email("Wrong email"),
  name: z.string().min(3),
  comment: z.string().min(10),
});

const paymentScheme = z.object({
  email: z.string().email("Wrong email"),
  agree: z.boolean().refine((val) => val, "Please accept Terms & Service"),
  name: z.string().min(3),
  tel: z.string().min(10).optional(),
});

const personalScheme = z.object({
  name: z.string().min(3),
  surname: z.string().min(2),
  userName: z.string().min(3),
  birthDay: z.string().date("Wrong Date"),
  gender: z.string(),
  lovedMovies: z.array(z.string()),
  file: z
    .any()
    .refine(
      (file) => (file ? file.size <= MAX_FILE_SIZE : true),
      `Max file size is 5MB.`
    )
    .refine(
      (file) => (file ? ACCEPTED_IMAGE_TYPES.includes(file?.type) : true),
      ".jpg, .jpeg, .png and .webp files are accepted."
    )
    .optional(),
});

const contactTabScheme = z
  .object({
    email: z.string().email("Wrong email"),
    rep_email: z.string().email("Wrong email"),
    tel: z.string().min(10).optional(),
    password: z.string().min(6).max(8),
    rep_password: z.string().min(6).max(8),
    mailing: z.boolean().optional(),
    agree: z.boolean().refine((val) => val, "Please accept Terms & Service"),
  })
  .superRefine(({ email, rep_email, password, rep_password }, ctx) => {
    if (email !== rep_email) {
      ctx.addIssue({
        code: "custom",
        message: "The emails did not match",
        path: ["rep_email"],
      });
    }
    if (password !== rep_password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["rep_password"],
      });
    }
  });

export {
  contactScheme,
  contactTabScheme,
  loginScheme,
  paymentScheme,
  personalScheme,
};
