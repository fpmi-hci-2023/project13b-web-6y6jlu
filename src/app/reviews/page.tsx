"use client";

import {
  PageWrapper,
  Menu,
  ReviewCard,
  BookReviewStartCard,
} from "@/components";

import style from "./page.module.css";

import background from "../../../public/page-background-main.png";
import classNames from "classnames";
import { Poppins } from "@/fonts";
import { reviews } from "@/constants";

export default function Reviews() {
  return (
    <PageWrapper backgroundSrc={background.src} className={style.page}>
      <Menu />

      <div className={style.pageContent}>
        <h1 className={classNames(style.pageTitle, Poppins.className)}>
          Book Reviews
        </h1>

        <div className={style.mainContent}>
          <BookReviewStartCard />

          {reviews.map((item) => (
            <ReviewCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
