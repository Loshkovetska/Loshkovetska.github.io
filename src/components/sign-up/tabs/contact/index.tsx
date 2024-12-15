import Agreement from "@/components/common/agreement";
import TabsContent from "@/components/sign-up/tabs";
import { SignUpFormType } from "@/components/sign-up/type";
import { FormElement } from "@/components/ui/form";

export default function ContactTab({
  form,
  onClick,
}: {
  form: SignUpFormType;
  onClick: () => void;
}) {
  return (
    <TabsContent
      form={form}
      title="Provide Contact Data to Us"
      buttonTitle="Sign Up"
      onClick={onClick}
    >
      <FormElement
        name="email"
        placeholder="E-mail"
        form={form}
        inputType="email"
      />
      <FormElement
        name="rep_email"
        inputType="email"
        placeholder="Repeat E-mail"
        form={form}
      />
      <FormElement
        name="tel"
        placeholder="Phone number"
        form={form}
      />
      <FormElement
        name="password"
        placeholder="Password"
        form={form}
        inputType="password"
      />
      <FormElement
        name="rep_password"
        placeholder="Repeat Password"
        inputType="password"
        form={form}
      />
      <Agreement
        form={form}
        name="mailing"
        label="I want to get mails from CinemaPark"
      />
      <Agreement
        form={form}
        name="agree"
        label="I accept Terms & Services of CinemaPark"
      />
    </TabsContent>
  );
}
