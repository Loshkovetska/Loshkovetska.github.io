import { PageProps } from "@/types";

export default async function Page(props: PageProps) {
  const { params } = props;
  const ps = await params;

  return <></>;
}
