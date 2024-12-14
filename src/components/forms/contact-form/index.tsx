"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SuccessDialog from "@/components/common/dialogs/success-dialog";
import { Button } from "@/components/ui/button";
import { Form, FormElement } from "@/components/ui/form";
import { contactScheme } from "@/lib/scheme";
import { useContactUsMutation } from "@/lib/services";

export default function ContactForm() {
  const [isOpen, setOpen] = useState(false);
  const [mutate, { isLoading }] = useContactUsMutation();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
    mode: "onChange",
    resolver: zodResolver(contactScheme),
  });

  const handleSubmit = useCallback(
    (values: z.infer<typeof contactScheme>) => {
      mutate(values).then((res) => {
        setOpen(true);
        form.reset();
      });
    },
    [form, mutate]
  );

  return (
    <div className="mx-auto w-full max-w-[600px]">
      <h3 className="my-10 text-center text-[20px] font-bold text-white">
        Leave a feedback
      </h3>
      <Form {...form}>
        <div className="flex flex-col gap-4">
          <FormElement
            form={form}
            name="name"
            placeholder="Enter Your Name"
          />
          <FormElement
            form={form}
            name="email"
            inputType="email"
            placeholder="Enter Your Email"
          />
          <FormElement
            form={form}
            isTextArea
            name="comment"
          />
        </div>
      </Form>
      <Button
        className="mt-6 w-full"
        disabled={!form.formState.isValid}
        loading={isLoading}
        onClick={form.handleSubmit(handleSubmit)}
      >
        Submit
      </Button>
      <SuccessDialog
        open={isOpen}
        onOpenChange={() => setOpen(false)}
        title="We are grateful for your feedback!"
        description="Continue"
      />
    </div>
  );
}
