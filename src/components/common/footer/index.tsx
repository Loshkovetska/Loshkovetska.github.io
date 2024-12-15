import SocialNetworks from "../social-networks";

export default function Footer() {
  return (
    <footer className="w-full bg-dark pb-16 pt-10">
      <div className="mx-auto flex w-[85%] flex-col items-center text-center">
        <SocialNetworks className="max-sm:m-0 max-sm:w-full" />
      </div>
    </footer>
  );
}
