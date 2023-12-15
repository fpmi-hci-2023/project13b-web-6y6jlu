"use client";

import { FC } from "react";
import style from "./BookInfoSection.module.css";
import { IBook } from "@/types";
import classNames from "classnames";
import { Poppins } from "@/fonts";

export interface BookInfoSectionProps extends IBook {}

export const BookInfoSection: FC<BookInfoSectionProps> = ({
  name,
  author,
  rating,
}) => {
  return (
    <div className={style.section}>
      <div className={style.info}>
        <h2 className={classNames(style.title, Poppins.className)}>{name}</h2>
        <p className={classNames(style.subtitle, Poppins.className)}>
          by {author}
        </p>
      </div>

      <p className={classNames(style.rating, Poppins.className)}>{rating}.0</p>
    </div>
  );
};
