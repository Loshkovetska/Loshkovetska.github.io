import { useCallback } from "react";

import TabsContent from "@/components/sign-up/tabs";
import GenresSelect from "@/components/sign-up/tabs/personal/genres-select";
import { SignUpFormType } from "@/components/sign-up/type";
import UploadPhoto from "@/components/sign-up/upload-photo";
import { FormElement } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
import { VALIDATION_OPTIONS } from "@/lib/constants";

type PersonalTabPropType = {
  form: SignUpFormType;
  onContinue: () => void;
};

export default function PersonalTab({ form, onContinue }: PersonalTabPropType) {
  const onGenderChange = useCallback(
    (v: string) => {
      form.setValue("gender", v, VALIDATION_OPTIONS);
    },
    [form]
  );
  return (
    <TabsContent
      form={form}
      title="Tell Us About Yourself"
      onClick={onContinue}
    >
      <UploadPhoto form={form} />
      <FormElement
        name="surname"
        placeholder="Surname"
        form={form}
      />
      <FormElement
        name="name"
        placeholder="Name"
        form={form}
      />
      <FormElement
        name="userName"
        placeholder="Username"
        form={form}
      />
      <FormElement
        name="birthDay"
        placeholder="Birthday"
        inputType="date"
        form={form}
      />
      <RadioGroup
        defaultValue={form.getValues("gender")}
        className="flex flex-row gap-4"
        onValueChange={onGenderChange}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="male"
            id="male"
          />
          <Label
            htmlFor="male"
            className="text-white/80"
          >
            Male
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="female"
            id="female"
          />
          <Label
            htmlFor="female"
            className="text-white/80"
          >
            Female
          </Label>
        </div>
      </RadioGroup>
      <GenresSelect form={form} />
    </TabsContent>
  );
}
