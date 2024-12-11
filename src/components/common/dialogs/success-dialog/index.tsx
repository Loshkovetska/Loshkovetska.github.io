import { MessageSquareHeart } from "lucide-react";

import Dialog from "@/components/ui/dialog";

type SuccessDialogPropType = {
  title: string;
  description: string;
  open: boolean;
  onOpenChange: (fl: boolean) => void;
};

export default function SuccessDialog(props: SuccessDialogPropType) {
  return (
    <Dialog
      {...props}
      icon={
        <div className="flex size-16 items-center justify-center self-center rounded-full bg-dark">
          <MessageSquareHeart className="size-8 text-white" />
        </div>
      }
      titleClassName="text-xl text-center"
      descriptionClassName="text-md text-center"
    />
  );
}
