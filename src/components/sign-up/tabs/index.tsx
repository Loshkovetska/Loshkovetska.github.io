import { SignUpFormType } from "@/components/sign-up/type";
import { Button } from "@/components/ui/button";

type TabsContentPropType = {
  title: string;
  form: SignUpFormType;
  buttonTitle?: string;
  loading?: boolean;
  onClick: () => void;
} & React.PropsWithChildren;

export default function TabsContent({
  title,
  children,
  form,
  buttonTitle,
  loading,
  onClick,
}: TabsContentPropType) {
  return (
    <div className="mx-auto w-[350px] pt-10">
      <h1 className="my-10 text-center text-md font-light text-white">
        {title}
      </h1>
      <div className="flex w-full flex-col gap-4">
        {children}
        <Button
          className="mt-4 w-full"
          disabled={!form.formState.isValid}
          loading={loading}
          onClick={onClick}
        >
          {buttonTitle || "Continue"}
        </Button>
      </div>
    </div>
  );
}
