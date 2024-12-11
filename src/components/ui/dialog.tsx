import * as RadixDialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";

type DialogPropType = {
  title?: string;
  trigger?: React.ReactNode;
} & PropsWithChildren;

export default function Dialog({ title, trigger, children }: DialogPropType) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay />
        <RadixDialog.Content>
          <div className="flex items-center justify-between">
            {title && <RadixDialog.Title>{title}</RadixDialog.Title>}
            <RadixDialog.Close className="size-6 items-center justify-center" />
          </div>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
