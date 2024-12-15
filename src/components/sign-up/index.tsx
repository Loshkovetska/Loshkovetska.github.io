"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import Header from "@/components/common/header";
import ContactTab from "@/components/sign-up/tabs/contact";
import PersonalTab from "@/components/sign-up/tabs/personal";
import { SignUpType } from "@/components/sign-up/type";
import { Form } from "@/components/ui/form";
import { contactTabScheme, personalScheme } from "@/lib/scheme";
import { useMovieGenresQuery } from "@/lib/services";
import dayjs from "dayjs";

export default function SignUpContent() {
  useMovieGenresQuery();
  const [tabIndex, setTab] = useState(0);

  const scheme = useMemo(
    () => (!tabIndex ? personalScheme : contactTabScheme),
    [tabIndex]
  );

  const form = useForm<SignUpType>({
    defaultValues: {
      name: "",
      surname: "",
      userName: "",
      birthDay: dayjs().format("YYYY-MM-DD"),
      gender: "man",
      lovedMovies: [],
      file: "",
      //   ---
      email: "",
      rep_email: "",
      tel: "",
      password: "",
      rep_password: "",
      mailing: false,
      agree: false,
    },
    resolver: zodResolver(scheme),
    mode: "onChange",
  });

  const handleTab = useCallback(
    (tab: number) => {
      if ((tab && form.formState.isValid) || !tab) {
        setTab(tab);
      }
    },
    [form]
  );

  const onSubmit = useCallback(() => {
    const values: any = form.getValues();

    delete values.agree;
    delete values.rep_email;
    delete values.rep_password;
    console.log(values);
  }, []);

  return (
    <>
      <Header
        page="sign-up"
        tabIndex={tabIndex}
        handleTabChange={handleTab}
      />
      <Form {...form}>
        <div className="mx-auto w-full max-w-[1180px]">
          {!tabIndex ? (
            <PersonalTab
              form={form}
              onContinue={() => setTab(1)}
            />
          ) : (
            <ContactTab
              form={form}
              onClick={form.handleSubmit(onSubmit)}
            />
          )}
        </div>
      </Form>
    </>
  );
}
