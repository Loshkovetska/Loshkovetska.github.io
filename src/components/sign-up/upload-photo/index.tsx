import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import { LuX } from "react-icons/lu";

import { UploadPhotoIcon } from "@/components/sign-up/tabs/icons";
import { SignUpFormType } from "@/components/sign-up/type";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VALIDATION_OPTIONS } from "@/lib/constants";

export default function UploadPhoto({ form }: { form: SignUpFormType }) {
  const file = useWatch({ control: form.control, name: "file" });

  const [imageUrl, setUrl] = useState<string | null>(null);

  const onReset = useCallback(() => {
    form.resetField("file");
    setUrl(null);
  }, [form]);

  const onUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      form.setValue("file", e.target.files?.[0], VALIDATION_OPTIONS);
    },
    [form]
  );

  const setImage = useCallback(() => {
    if (!file) return;
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function () {
      setUrl(reader.result as string);
    };
  }, [file]);

  useEffect(() => {
    setImage();
  }, [setImage]);

  return (
    <>
      {imageUrl && (
        <div className="relative flex size-[80px] items-center justify-center self-center">
          <Button
            size="icon"
            variant="outline"
            className="absolute -right-1 -top-1 size-6"
            onClick={onReset}
          >
            <LuX />
          </Button>
          <Image
            alt={file.name}
            src={imageUrl}
            fill
            sizes="80px"
            className="rounded-full bg-white/80 object-contain object-center"
          />
        </div>
      )}
      {!imageUrl && (
        <div className="relative flex size-[80px] items-center justify-center self-center overflow-hidden rounded-full">
          <UploadPhotoIcon />
          <Input
            name="file"
            type="file"
            className="absolute inset-0 size-full opacity-0"
            inputClassName="w-full h-full"
            onChange={onUpload}
          />
        </div>
      )}
    </>
  );
}
