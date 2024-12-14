import { useCallback } from "react";
import { UseFormReturn } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type AgreementPropType = {
  name: string;
  form: UseFormReturn<any>;
  label: string;
};

export default function Agreement({ name, form, label }: AgreementPropType) {
  const onCheck = useCallback(
    (val: boolean) => {
      form.setValue(name, val ? 1 : 0, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    },
    [form, name]
  );
  return (
    <Label className="flex cursor-pointer items-center gap-3 text-white">
      <Checkbox
        value={form.getValues(name)}
        onCheckedChange={onCheck}
      />
      {label}
    </Label>
  );
}
