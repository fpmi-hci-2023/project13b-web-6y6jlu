"use client";

import { PageWrapper, Menu, CollectionCard } from "@/components";

import style from "./page.module.css";

import background from "../../../public/page-background-main.png";
import classNames from "classnames";
import { Poppins } from "@/fonts";
import { ICollection } from "@/types";



const collections: ICollection[] = [
  {
    title: "bububu",
    author: "bububu",
    books: [{
      id: 22,
      name: "The Da Vinci Code",
      author: "Dan Brown",
      description:
        "A thrilling mystery novel that follows a symbologist and a cryptologist as they unravel clues and secrets to solve a centuries-old mystery.",
      rating: 4.3,
    }],
    
  },
  { title: "bububu",
  author: "bububu",
  books: [{
    id: 22,
    name: "The Da Vinci Code",
    author: "Dan Brown",
    description:
      "A thrilling mystery novel that follows a symbologist and a cryptologist as they unravel clues and secrets to solve a centuries-old mystery.",
    rating: 4.3,
  }], }, 
  { title: "bububu",
  author: "bububu",
  books: [{
    id: 22,
    name: "The Da Vinci Code",
    author: "Dan Brown",
    description:
      "A thrilling mystery novel that follows a symbologist and a cryptologist as they unravel clues and secrets to solve a centuries-old mystery.",
    rating: 4.3,
  }], }
];

export default function Collections() {
  return (
    <PageWrapper backgroundSrc={background.src} className={style.page}>
      <Menu />

      <div className={style.pageContent}>
        <h1 className={classNames(style.pageTitle, Poppins.className)}>
          Collections
        </h1>

        <div className={style.mainContent}>
          {collections.map((item) => (
            <CollectionCard></CollectionCard>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
