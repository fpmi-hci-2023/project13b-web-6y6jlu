import { PageWrapper, BookCard, Menu, Search } from "@/components";

import style from "./page.module.css";

import background from "../../public/page-background-main.png";
import { books } from "@/constants";

export default function Home() {
  return (
    <PageWrapper backgroundSrc={background.src} className={style.page}>
      <Menu />

      <div className={style.pageContent}>
        <Search />

        <div className={style.mainContent}>
          {books.map((item) => (
            <BookCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
