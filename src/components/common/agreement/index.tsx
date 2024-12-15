import { useCallback } from "react";
import { UseFormReturn } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { VALIDATION_OPTIONS } from "@/lib/constants";

type AgreementPropType = {
  name: string;
  form: UseFormReturn<any>;
  label: string;
};

export default function Agreement({ name, form, label }: AgreementPropType) {
  const onCheck = useCallback(
    (val: boolean) => {
      form.setValue(name, val, VALIDATION_OPTIONS);
    },
    [form, name]
  );
  return (
    <Label className="flex cursor-pointer items-center gap-3 text-white">
      <Checkbox
        checked={form.getValues(name)}
        value={form.getValues(name)}
        onCheckedChange={onCheck}
      />
      {label}
    </Label>
  );
}
