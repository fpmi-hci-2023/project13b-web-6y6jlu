"use client";

import {
  PageWrapper,
  Menu,
  ReviewCard,
  ReviewCardProps,
  BookReviewStartCard,
} from "@/components";

import style from "./page.module.css";

import background from "../../../public/page-background-main.png";
import classNames from "classnames";
import { Poppins } from "@/fonts";

const reviews: ReviewCardProps[] = [
  {
    name: "Aston Ville",
    description:
      "This book was about a bird who didn't yet know how to fly. The bird has to decide if it will try to fly, but it was not sure if it wants to. The bird thought, If I never forever endeavor then I won't ever learn. On one wing, he worries he might fail and on the other wing he thinks of how he may succeed. He worries that if he tries, he may get lost in the world. That makes him want to stay in his nest where he's safe.",
    rating: 4.5,
  },
  {
    name: "The Enchanted Forest",
    description:
      "This story is about a young girl who discovers a magical forest behind her house. In the forest, she encounters talking animals and learns valuable life lessons. She must decide whether to keep the forest a secret or share its wonders with others. The book teaches the importance of friendship and the beauty of nature.",
    rating: 4.2,
  },
  {
    name: "The Secret Journey",
    description:
      "In this adventure-filled novel, a group of friends embarks on a secret journey to find a hidden treasure. Along the way, they face numerous challenges and overcome their fears. The book highlights the power of teamwork, courage, and perseverance. Readers will be captivated by the suspense and excitement throughout the story.",
    rating: 4.7,
  },
  {
    name: "The Mysterious Island",
    description:
      "This thrilling tale follows a group of castaways stranded on a mysterious island after a shipwreck. As they explore the island, they encounter strange creatures, solve puzzles, and uncover hidden secrets. The book combines elements of adventure, mystery, and survival. It keeps readers engaged with its unpredictable twists and turns.",
    rating: 4.3,
  },
  {
    name: "The Magical Amulet",
    description:
      "Join the protagonist on a magical quest to find a legendary amulet that holds immense power. Along the way, they encounter mythical creatures, face dangerous challenges, and discover the true meaning of bravery. This fantasy novel takes readers on a captivating journey filled with enchantment and wonder.",
    rating: 4.8,
  },
  {
    name: "The Art of Persistence",
    description:
      "This inspirational book tells the stories of individuals who overcame adversity and achieved remarkable success through persistence. It offers practical advice and strategies for developing a resilient mindset and never giving up on your dreams. The book encourages readers to embrace challenges and stay determined in the face of obstacles.",
    rating: 4.6,
  },
];

export default function Reviews() {
  return (
    <PageWrapper backgroundSrc={background.src} className={style.page}>
      <Menu />

      <div className={style.pageContent}>
        <h1 className={classNames(style.pageTitle, Poppins.className)}>
          Book Reviews
        </h1>

        <div className={style.mainContent}>
          <BookReviewStartCard />

          {reviews.map((item) => (
            <ReviewCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
