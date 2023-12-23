"use client";

import { FC, useCallback } from "react";
import style from "./CollectionCard.module.css";
import { Poppins } from "@/fonts";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { ICollection } from "@/types";

export interface CollectionCardProps extends ICollection {
  backgroundColor?: string;
}
export interface CollectionCardProps {}
const cards: number[] = [1, 2, 3, 4, 5, 6];
export const CollectionCard: FC<CollectionCardProps> = ({
  id,
  title,
  author,
}) => {
  const router = useRouter();

  const handleBookClick = useCallback(() => {
    router.replace(`/collections/${id}`);
  }, [router, id]);

  return (
    <div className={style.card} onClick={handleBookClick}>
      <div className={style.cardInfo}>
        <h5 className={classNames(style.bookTitle, Poppins.className)}>
          {title}
        </h5>

        <p className={classNames(style.bookAuthor, Poppins.className)}>
          {author}
        </p>
      </div>

      <div className={style.booksContainer}>
        {cards.map((item) => (
          <div key={item} className={style.block}></div>
        ))}
      </div>
    </div>
  );
};
