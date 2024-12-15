import { SignUpFormType } from "@/components/sign-up/type";
import { Select } from "@/components/ui/select";
import { useGenres } from "@/lib/hooks";
import { useCallback } from "react";
import { useWatch } from "react-hook-form";

export default function GenresSelect({ form }: { form: SignUpFormType }) {
  const { genresNames } = useGenres(true);
  const selectedGenres = useWatch({
    control: form.control,
    name: "lovedMovies",
  });

  const onSelect = useCallback(
    (val: string) => {
      const present = selectedGenres.includes(val);
      form.setValue(
        "lovedMovies",
        present
          ? selectedGenres.filter((s) => s !== val)
          : [...selectedGenres, val],
        {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        }
      );
    },
    [selectedGenres]
  );

  return (
    <Select
      multiple
      options={genresNames}
      placeholder="Choose your fav genres"
      value={selectedGenres.join(", ") || ""}
      onValueChange={onSelect}
    />
  );
}
