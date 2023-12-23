"use client";

import {
  PageWrapper,
  Menu,
  BookInfoSection,
  ReviewCard,
  BookCard,
} from "@/components";

import style from "./page.module.css";

import background from "../../../../public/page-background-main.png";
import classNames from "classnames";
import { Poppins } from "@/fonts";
import { useCallback, useEffect, useState } from "react";
import { API_URL, books, reviews } from "@/constants";
import { IBook, ICollection } from "@/types";
import { useParams } from "next/navigation";

type filtersType = "reviews" | "collections" | "quotes";

const enabledFilters: filtersType[] = ["reviews", "collections", "quotes"];

export default function BookPage() {
  const [filter, setFilter] = useState<filtersType>("reviews");
  const [book, setBook] = useState<IBook | null>(null);
  const [collections, setCollections] = useState<ICollection[]>([]);
  const params = useParams<{ id: string }>();

  const loadBook = useCallback(async () => {
    const bookResposnse = await fetch(`${API_URL}/search/${params.id}`);

    const bookData: IBook = await bookResposnse.json();

    setBook(bookData);
  }, [params.id]);

 

  const loadCollections = useCallback(async() => {
    const collectionsResponse = await fetch(`${API_URL}/bookcollection/${params.id}`);

    const collectionsData: ICollection[] = await collectionsResponse.json();

    setCollections(collectionsData); 
  }, [params.id]);

  useEffect(() => {
    loadBook();
    loadCollections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper backgroundSrc={background.src} className={style.page}>
      <Menu />

      <div className={style.pageContent}>
        {book && <BookInfoSection {...book} />}

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
          {filter === "reviews" &&
            reviews.map((item) => <ReviewCard key={item.id} {...item} />)}

          {filter === "collections" &&
            books.map((item) => <BookCard key={item.book_id} {...item} />)}

          {filter === "quotes" &&
            [1, 2, 3].map((item) => (
              <div className={style.quote} key={item}>
                <h5 className={classNames(style.title, Poppins.className)}>
                  Tomas Li the {item}
                </h5>

                <p className={classNames(style.description, Poppins.className)}>
                  {item} &#34;A powerful story set in the Deep South, tackling
                  themes of racism and injustice through the eyes of a young
                  girl.&#34;
                </p>
              </div>
            ))}
        </div>
      </div>
    </PageWrapper>
  );
}
