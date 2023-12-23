"use client";

import { PageWrapper } from "@/components";
import { useCallback, useState } from "react";

import style from "./page.module.css";

import background from "../../../public/page-background-login.png";
import classNames from "classnames";
import { Poppins } from "@/fonts";
import { useRouter } from "next/navigation";
import { Pages } from "@/constants";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";

type LoginValues = {
  login: string;
  password: string;
};

const resolver: Resolver<LoginValues> = async (values) => {
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

  const { handleSubmit, register, formState } = useForm<LoginValues>({
    resolver,
  });

  const handleLogin: SubmitHandler<LoginValues> = useCallback(
    ({ login }) => {
      if (!formState.isValid || login !== "admin") {
        return;
      }

      router.push(Pages.main);
    },
    [formState.isValid, router]
  );

  const handleSignup = useCallback(() => {
    router.push(Pages.signup);
  }, [router]);

  return (
    <PageWrapper backgroundSrc={background.src} className={style.page}>
      <div className={style.glass}>
        <div className={style.loginWrapper}>
          <h1 className={classNames(style.title, Poppins.className)}>
            Welcome back
          </h1>

          <form onSubmit={handleSubmit(handleLogin)} className={style.controls}>
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

            <button
              className={classNames(style.loginButton, Poppins.className)}
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>

        <div className={style.bottomContent}>
          <button
            onClick={handleSignup}
            className={classNames(style.signUpButton, Poppins.className)}
          >
            Sign Up
          </button>

          <p className={classNames(style.tip, Poppins.className)}>
            tip: don&#39;t read books while driving a car
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
