type DetailsBlockPropType = {
  title: string;
} & React.PropsWithChildren;

export default function DetailsBlock({
  title,
  children,
}: DetailsBlockPropType) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-white/80">{title}:</h2>
      {children}
    </div>
  );
}
