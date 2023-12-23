"use client";

import { PageWrapper } from "@/components";
import { useCallback } from "react";

import style from "./page.module.css";

import background from "../../../public/page-background-login.png";
import classNames from "classnames";
import { Poppins } from "@/fonts";
import { Pages } from "@/constants";
import { useRouter } from "next/navigation";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";

type SignupValues = {
  login: string;
  password: string;
  passwordCopy: string;
};

const resolver: Resolver<SignupValues> = async (values) => {
  return {
    values: values.login ? values : {},
    errors: !values.login
      ? {
          login: {
            type: "required",
            message: "login is required",
          },
        }
      : {},
  };
};

export default function Login() {
  const router = useRouter();

  const { handleSubmit, register, formState } = useForm<SignupValues>({
    resolver,
  });

  const handleLogin = useCallback(() => {
    router.replace(Pages.login);
  }, [router]);

  const handleRegistration: SubmitHandler<SignupValues> = useCallback(
    ({ login }) => {
      if (!formState.isValid || login !== "admin") {
        return;
      }

      router.push(Pages.main);
    },
    [formState.isValid, router]
  );

  return (
    <PageWrapper backgroundSrc={background.src} className={style.page}>
      <div className={style.glass}>
        <div className={style.loginWrapper}>
          <h1 className={classNames(style.title, Poppins.className)}>
            Join us
          </h1>

          <form
            onSubmit={handleSubmit(handleRegistration)}
            className={style.controls}
          >
            <input
              {...register("login")}
              className={classNames(style.input, Poppins.className)}
              type="text"
              placeholder="login"
            />

            <input
              className={classNames(style.input, Poppins.className)}
              type="password"
              placeholder="password"
            />

            <input
              className={classNames(style.input, Poppins.className)}
              type="password"
              placeholder="repeat password"
            />

            <button
              className={classNames(style.registerButton, Poppins.className)}
              type="submit"
            >
              Register
            </button>
          </form>
        </div>

        <div className={style.bottomContent}>
          <button
            className={classNames(style.loginButton, Poppins.className)}
            onClick={handleLogin}
          >
            Log in
          </button>

          <p className={classNames(style.tip, Poppins.className)}>
            tip: don&#39;t read books while driving a car
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
