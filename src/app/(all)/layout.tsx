import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
