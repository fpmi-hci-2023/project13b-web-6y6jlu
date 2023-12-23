"use client";

import { FC, useCallback, useMemo } from "react";
import style from "./BookCard.module.css";
import { IBook } from "@/types";
import { Poppins } from "@/fonts";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { generateRandomColor } from "@/utils";

export interface BookCardProps extends IBook {
  backgroundColor?: string;
}

export const BookCard: FC<BookCardProps> = ({
  book_id,
  name,
  author,
  annotation,
  backgroundColor = "",
}) => {
  const router = useRouter();

  const handleBookClick = useCallback(() => {
    router.replace(`/book/${book_id}`);
  }, [router, book_id]);

  const bgColor: string = useMemo(() => {
    // return generateRandomColor() + '66';
    return generateRandomColor();
  }, []);

  return (
    <div
      className={style.card}
      style={{ backgroundColor: backgroundColor ? backgroundColor : bgColor }}
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
        {annotation}
      </p>
    </div>
  );
};
