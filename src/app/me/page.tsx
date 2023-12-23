"use client";

import { PageWrapper, BookCard, Menu } from "@/components";
import { useCallback, useEffect, useState } from "react";

import style from "./page.module.css";

import background from "../../../public/page-background-main.png";
import avatar from "../../../public/avatar.png";
import { ProfileSection } from "@/components/ProfileSection";
import classNames from "classnames";
import { Poppins } from "@/fonts";
import { useParams } from "next/navigation";
import { API_URL } from "@/constants";
import { IBook } from "@/types";

type filtersType =
  | "read"
  | "reading"
  | "completed"
  | "collections"
  | "reviews"
  | "friends";

const enabledFilters: filtersType[] = [
  "read",
  "reading",
  "completed",
  "collections",
  "reviews",
  "friends",
];

export default function Me() {
  const [filter, setFilter] = useState<filtersType>("read");
  const [books, setBooks] = useState<IBook[]>([]);

  const loadBooks = useCallback(async () => {
    const booksResponse = await fetch(`${API_URL}/mybooks/2`);

    const booksData: IBook[] = await booksResponse.json();

    console.log("data", booksData);

    setBooks(booksData);
  }, []);

  useEffect(() => {
    loadBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper backgroundSrc={background.src} className={style.page}>
      <Menu />

      <div className={style.pageContent}>
        <ProfileSection name="PROFILE name" avatarUrl={avatar.src} />

        <div className={style.tabsWrapper}>
          {enabledFilters.map((item) => (
            <div
              key={item}
              className={classNames(style.tab, {
                [style.selected]: filter === item,
              })}
              onClick={() => {
                if (filter !== item) {
                  setFilter(item);
                }
              }}
            >
              <p className={classNames(style.tabTitle, Poppins.className)}>
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className={style.mainContent}>
          {books.map((item) => (
            <BookCard key={item.book_id} {...item} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
