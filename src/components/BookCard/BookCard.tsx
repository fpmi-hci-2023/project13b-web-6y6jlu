"use client";

import { FC, useCallback } from "react";
import style from "./BookCard.module.css";
import { IBook } from "@/types";
import { Poppins } from "@/fonts";
import classNames from "classnames";
import { useRouter } from "next/navigation";

export interface BookCardProps extends IBook {
  backgroundColor?: string;
}

export const BookCard: FC<BookCardProps> = ({
  id,
  name,
  author,
  description,
  backgroundColor = "",
}) => {
  const router = useRouter();

  const handleBookClick = useCallback(() => {
    router.replace(`/book/${id}`);
  }, [router, id]);

  return (
    <div
      className={style.card}
      style={{ backgroundColor }}
      onClick={handleBookClick}
    >
      <div className={style.cardHeader}>
        <div className={style.cardHeaderContent}>
          <h5 className={classNames(style.title, Poppins.className)}>{name}</h5>

          <p className={classNames(style.subtitle, Poppins.className)}>
            {author}
          </p>
        </div>

        <div className={style.tmpIcon}></div>
      </div>

      <p className={classNames(style.description, Poppins.className)}>
        {description}
      </p>
    </div>
  );
};
