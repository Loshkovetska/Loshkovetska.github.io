import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormElement } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { loginScheme } from "@/lib/scheme";

export default function SignInForm() {
  const form = useForm({
    resolver: zodResolver(loginScheme),
    defaultValues: { email: "", password: "", remember: 0 },
    mode: "onChange",
  });

  const handleSubmit = useCallback(
    (values: z.infer<typeof loginScheme>) => {},
    []
  );

  const onCheck = useCallback(
    (val: boolean) => {
      form.setValue("remember", val ? 1 : 0, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    },
    [form]
  );
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
          <Label className="flex cursor-pointer items-center gap-3 text-white">
            <Checkbox
              value={form.getValues("remember")}
              onCheckedChange={onCheck}
            />
            Remember me?
          </Label>
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
