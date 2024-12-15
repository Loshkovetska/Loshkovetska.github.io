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
import { useMovieGenresQuery, useSignUpMutation } from "@/lib/services";
import dayjs from "dayjs";
import { signIn } from "next-auth/react";

export default function SignUpContent() {
  useMovieGenresQuery();
  const [tabIndex, setTab] = useState(0);
  const [mutate, { isLoading }] = useSignUpMutation();

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
      gender: "male",
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
    const fd = new FormData();
    const values: any = form.getValues();

    delete values.agree;
    delete values.rep_email;
    delete values.rep_password;

    Object.entries(values).forEach(([key, value]) => {
      if (key === "file") {
        fd.append("file", value as Blob);
      } else fd.append(key, String(value));
    });

    mutate(fd).then(async (res) => {
      console.log(res);
      if (!res.error) {
        await signIn("credentials", {
          redirect: true,
          callbackUrl: "/",
          email: values.email,
          password: values.password,
        });
      }
    });
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
              loading={isLoading}
            />
          )}
        </div>
      </Form>
    </>
  );
}
