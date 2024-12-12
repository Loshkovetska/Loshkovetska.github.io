import Link from "next/link";
import { FaMailBulk, FaMapPin, FaPhone } from "react-icons/fa";

import ContactForm from "@/components/forms/contact-form";

export default function Contact() {
  return (
    <section className="py-10">
      <div className="mx-auto w-[85%]">
        <div className="my-10 text-center text-[20px] font-bold text-white">
          Keep In Touch
        </div>
        <div className="flex w-full flex-col gap-16">
          <div className="grid  grid-cols-3 justify-center gap-[128px] max-lg:gap-5 max-sm:grid-cols-1">
            <div className="flex flex-col items-center gap-2">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-white">
                <FaPhone className="text-dark" />
              </div>
              <Link
                className="text-white/80"
                href="tel:+180936202100"
              >
                +18 093 620 21 00
              </Link>
              <Link
                className="text-white/80"
                href="tel:+100986202100"
              >
                +10 098 620 21 00
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-white">
                <FaMailBulk className="text-dark" />
              </div>
              <Link
                className="text-white/80"
                href="mailto:cinema_park@gmail.com"
              >
                cinema_park@gmail.com
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-white">
                <FaMapPin />
              </div>
              <Link
                href="#"
                className="text-center text-white/80"
              >
                USA, New York, New Jersey 20
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
