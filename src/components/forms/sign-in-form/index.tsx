import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Agreement from "@/components/common/agreement";
import { Button } from "@/components/ui/button";
import { Form, FormElement } from "@/components/ui/form";
import { loginScheme } from "@/lib/scheme";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const form = useForm({
    resolver: zodResolver(loginScheme),
    defaultValues: { email: "", password: "", remember: false },
    mode: "onChange",
  });

  const handleSubmit = useCallback((values: z.infer<typeof loginScheme>) => {
    signIn("credentials", values);
  }, []);

  return (
    <>
      <Form {...form}>
        <div className="flex w-full flex-col gap-4">
          <FormElement
            form={form}
            placeholder="E-mail"
            name="email"
            itemClassName="w-full"
          />
          <FormElement
            form={form}
            name="password"
            inputType="password"
            placeholder="Password"
            showPassIcon
            itemClassName="w-full"
          />
          <Agreement
            label="Remember me?"
            name="remember"
            form={form}
          />
        </div>
      </Form>
      <Button
        onClick={form.handleSubmit(handleSubmit)}
        disabled={!form.formState.isValid}
        className="w-full"
      >
        Submit
      </Button>
    </>
  );
}
