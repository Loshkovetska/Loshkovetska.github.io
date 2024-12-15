import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { contactTabScheme, personalScheme } from "@/lib/scheme";

type SignUpPersonalType = z.infer<typeof personalScheme>;
type SignUpContactType = z.infer<typeof contactTabScheme>;

type SignUpContactFormType = UseFormReturn<SignUpContactType>;
type SignUpPersonalFormType = UseFormReturn<SignUpPersonalType>;

type SignUpType = SignUpPersonalType & SignUpContactType;
type SignUpFormType = UseFormReturn<SignUpType>;

export type {
  SignUpContactFormType,
  SignUpContactType,
  SignUpFormType,
  SignUpPersonalFormType,
  SignUpPersonalType,
  SignUpType,
};
