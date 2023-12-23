"use client";

import {
  PageWrapper,
  BookCard,
  Menu,
  Search,
  CollectionCard,
  ReviewCard,
} from "@/components";

import style from "./page.module.css";

import background from "../../public/page-background-main.png";
import { API_URL, collections, reviews } from "@/constants";
import { useCallback, useEffect, useState } from "react";
import { IBook } from "@/types";

export default function Home() {
  const [books, setBooks] = useState<IBook[]>([]);

  const loadBooks = useCallback(async () => {
    const booksResponse = await fetch(`${API_URL}/all`);

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
        <Search />

        <div className={style.mainContent}>
          <CollectionCard {...collections[0]} />

          <ReviewCard {...reviews[0]} />

          {books.map((item) => (
            <BookCard key={item.book_id} {...item} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
