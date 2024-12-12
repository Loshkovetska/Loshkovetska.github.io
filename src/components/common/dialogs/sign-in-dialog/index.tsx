import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { z } from "zod";

import SocialConnect from "@/components/sign-in/social-connect";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Dialog from "@/components/ui/dialog";
import { Form, FormElement } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { loginScheme } from "@/lib/scheme";

export default function SignInDialog() {
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
    <Dialog
      title="Sign In"
      titleClassName="text-lg text-white"
      trigger={
        <button className="group flex size-8 cursor-pointer items-center justify-center">
          <FaUser className="fill-white/90 stroke-white/90 group-hover:fill-white group-hover:stroke-white" />
        </button>
      }
      className="border-none bg-dark max-md:w-[90%] lg:max-w-[600px]"
    >
      <div className="flex w-full flex-col gap-8 lg:my-10">
        <SocialConnect />
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
        <div className="flex items-center gap-3">
          <span className="text-sm font-light text-white">
            Don&apos;t have an account?
          </span>
          <Link
            href="/sign-up"
            className="text-md text-white/80 hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </Dialog>
  );
}
