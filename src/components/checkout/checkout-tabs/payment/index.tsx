import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import PaymentSummaryDialog from "@/components/checkout/checkout-tabs/payment/payment-summary-dialog";
import Agreement from "@/components/common/agreement";
import { Button } from "@/components/ui/button";
import { Form, FormElement } from "@/components/ui/form";
import { paymentScheme } from "@/lib/scheme";
import { useConfirmOrderMutation } from "@/lib/services";
import { OrderType } from "@/types";

type PaymentPropType = {
  order: OrderType;
  onDeleteTicket: (ticket: OrderType["seats"][0]) => void;
  onDeleteProduct: (prod: OrderType["store"][0]) => void;
};

export default function Payment({
  order,
  onDeleteTicket,
  onDeleteProduct,
}: PaymentPropType) {
  const [isOpen, setOpen] = useState(true);
  const router = useRouter();
  const [mutate, { isLoading }] = useConfirmOrderMutation();
  const form = useForm({
    defaultValues: {
      email: "",
      tel: "",
      name: "",
      agree: false,
    },
    resolver: zodResolver(paymentScheme),
    mode: "onChange",
  });

  const onSubmit = useCallback(
    (values: z.infer<typeof paymentScheme>) => {
      mutate({
        ...order,
        email: values.email,
        tel: values.tel || "",
        name: values.name,
      }).then(() => router.push("/"));
    },
    [order, router, mutate]
  );

  return (
    <Form {...form}>
      <div className="mx-auto flex flex-col gap-4 lg:max-w-[500px]">
        <h2 className="text-center text-lg text-white/80">
          Where to send the tickets?
        </h2>
        <FormElement
          name="name"
          placeholder="Name"
          form={form}
        />
        <FormElement
          name="email"
          inputType="email"
          placeholder="E-Mail"
          form={form}
        />
        <FormElement
          name="tel"
          placeholder="Phone number"
          form={form}
        />
        <Agreement
          name="agree"
          label="I agree with Terms & Services"
          form={form}
        />
        <Button
          onClick={form.handleSubmit(onSubmit)}
          disabled={!form.formState.isValid}
          loading={isLoading}
        >
          Pay
        </Button>
      </div>
      <PaymentSummaryDialog
        open={isOpen}
        order={order}
        onOpenChange={setOpen}
        onDeleteTicket={onDeleteTicket}
        onDeleteProduct={onDeleteProduct}
      />
    </Form>
  );
}
