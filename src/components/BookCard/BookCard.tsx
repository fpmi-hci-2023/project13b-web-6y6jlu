"use client";

import { FC } from "react";
import style from "./BookCard.module.css";

export interface BookCardProps {
  name: string;
}

export const BookCard: FC<BookCardProps> = ({ name }) => {
  return (
    <div>
      <h1 className={style.name}>{name}</h1>
    </div>
  );
};
