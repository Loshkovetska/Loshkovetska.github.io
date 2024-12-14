import CheckoutContent from "@/components/checkout";
import { getMovie } from "@/lib/actions";
import { PageProps } from "@/types";

export default async function Page(props: PageProps) {
  const params = await props.params;
  const response = await getMovie(params.id, false);

  return <CheckoutContent {...response} />;
}
