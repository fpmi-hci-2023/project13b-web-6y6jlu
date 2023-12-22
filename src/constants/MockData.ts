import { IBook, ICollection, IReview } from "@/types";

export const books: IBook[] = [
  {
    id: 1,
    name: "Harry Potter",
    author: "Dmitriy Sibiryak",
    description:
      "A popular fantasy series about a young wizard and his adventures.",
    rating: 4,
  },
  {
    id: 2,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A classic novel set in 1920s America, exploring themes of wealth, love, and the American Dream.",
    rating: 5,
  },
  {
    id: 3,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A powerful story set in the Deep South, tackling themes of racism and injustice through the eyes of a young girl.",
    rating: 4.5,
  },
  {
    id: 4,
    name: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel that depicts a totalitarian society and the struggles of one man against the oppressive regime.",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A classic romance novel exploring themes of social class, love, and the importance of overcoming prejudice.",
    rating: 4.7,
  },
  {
    id: 6,
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "A coming-of-age novel that follows the rebellious teenager Holden Caulfield as he navigates through life and society.",
    rating: 4.2,
  },
  {
    id: 7,
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description:
      "An epic fantasy trilogy that chronicles the journey of a group of characters to destroy a powerful ring and save Middle-earth.",
    rating: 4.9,
  },
  {
    id: 8,
    name: "To the Lighthouse",
    author: "Virginia Woolf",
    description:
      "A modernist novel that explores the inner thoughts and experiences of characters during a family trip to a lighthouse.",
    rating: 4.3,
  },
  {
    id: 9,
    name: "Moby-Dick",
    author: "Herman Melville",
    description:
      "A literary masterpiece that follows the obsessive quest of Captain Ahab to hunt down the white whale, Moby-Dick.",
    rating: 4.6,
  },
  {
    id: 10,
    name: "The Odyssey",
    author: "Homer",
    description:
      "An ancient Greek epic poem that tells the story of Odysseus' journey home after the Trojan War.",
    rating: 4.4,
  },
  {
    id: 11,
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    description:
      "A classic novel that follows the life of Jane Eyre, a strong-willed young woman, as she faces challenges and finds love.",
    rating: 4.7,
  },
  {
    id: 12,
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "A fantasy novel that serves as a prequel to The Lord of the Rings, recounting the adventures of Bilbo Baggins.",
    rating: 4.5,
  },
  {
    id: 13,
    name: "Fahrenheit 451",
    author: "Ray Bradbury",
    description:
      "A dystopian novel set in a future society where books are banned and burned, exploring themes of censorship and knowledge.",
    rating: 4.3,
  },
  {
    id: 14,
    name: "Brave New World",
    author: "Aldous Huxley",
    description:
      "A dystopian novel that presents a futuristic society where individuals are controlled and conditioned for a stable, conformist existence.",
    rating: 4.2,
  },
  {
    id: 15,
    name: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    description:
      "A classic novel that follows the adventures of Huck Finn and his friend Jim, an escaped slave, as they travel down the Mississippi River.",
    rating: 4.6,
  },
  {
    id: 16,
    name: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    description:
      "A psychological novel that delves into the mind of a young man, Raskolnikov, who commits a murder and grapples with guilt and redemption.",
    rating: 4.9,
  },
  {
    id: 17,
    name: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description:
      "A Gothic novel that tells the story of Dorian Gray, a man who remains eternally youthful while a portrait of him ages and reflects his sins.",
    rating: 4.7,
  },
  {
    id: 18,
    name: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "A philosophical novel that follows the journey of a young shepherd named Santiago as he seeks his personal legend and discovers the meaning of life.",
    rating: 4.5,
  },
  {
    id: 19,
    name: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    description:
      "A series of fantasy novels that transport readers to the magical world of Narnia, where they embark on adventures with various characters.",
    rating: 4.8,
  },
  {
    id: 20,
    name: "The Kite Runner",
    author: "Khaled Hosseini",
    description:
      "A powerful story that explores friendship, betrayal, and redemption against the backdrop of Afghanistan's tumultuous history.",
    rating: 4.6,
  },
  {
    id: 21,
    name: "The Hunger Games",
    author: "Suzanne Collins",
    description:
      "A dystopian trilogy set in a post-apocalyptic society where teenagers are forced to participate in a televised fight to the death.",
    rating: 4.4,
  },
  {
    id: 22,
    name: "The Da Vinci Code",
    author: "Dan Brown",
    description:
      "A thrilling mystery novel that follows a symbologist and a cryptologist as they unravel clues and secrets to solve a centuries-old mystery.",
    rating: 4.3,
  },
];

export const collections: ICollection[] = [
  {
    id: 1,
    title: 'My Caol',
    author: 'Tanya',
    books: [
      {
        id: 5,
        name: "Pride and Prejudice",
        author: "Jane Austen",
        description:
          "A classic romance novel exploring themes of social class, love, and the importance of overcoming prejudice.",
        rating: 4.7,
      },
      {
        id: 6,
        name: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description:
          "A coming-of-age novel that follows the rebellious teenager Holden Caulfield as he navigates through life and society.",
        rating: 4.2,
      },
      {
        id: 7,
        name: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        description:
          "An epic fantasy trilogy that chronicles the journey of a group of characters to destroy a powerful ring and save Middle-earth.",
        rating: 4.9,
      },
    ],
  },
];

export const reviews: IReview[] = [
  {
    id: 1,
    name: "Aston Ville",
    description:
      "This book was about a bird who didn't yet know how to fly. The bird has to decide if it will try to fly, but it was not sure if it wants to. The bird thought, If I never forever endeavor then I won't ever learn. On one wing, he worries he might fail and on the other wing he thinks of how he may succeed. He worries that if he tries, he may get lost in the world. That makes him want to stay in his nest where he's safe.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "The Enchanted Forest",
    description:
      "This story is about a young girl who discovers a magical forest behind her house. In the forest, she encounters talking animals and learns valuable life lessons. She must decide whether to keep the forest a secret or share its wonders with others. The book teaches the importance of friendship and the beauty of nature.",
    rating: 4.2,
  },
  {
    id: 3,
    name: "The Secret Journey",
    description:
      "In this adventure-filled novel, a group of friends embarks on a secret journey to find a hidden treasure. Along the way, they face numerous challenges and overcome their fears. The book highlights the power of teamwork, courage, and perseverance. Readers will be captivated by the suspense and excitement throughout the story.",
    rating: 4.7,
  },
  {
    id: 4,
    name: "The Mysterious Island",
    description:
      "This thrilling tale follows a group of castaways stranded on a mysterious island after a shipwreck. As they explore the island, they encounter strange creatures, solve puzzles, and uncover hidden secrets. The book combines elements of adventure, mystery, and survival. It keeps readers engaged with its unpredictable twists and turns.",
    rating: 4.3,
  },
  {
    id: 5,
    name: "The Magical Amulet",
    description:
      "Join the protagonist on a magical quest to find a legendary amulet that holds immense power. Along the way, they encounter mythical creatures, face dangerous challenges, and discover the true meaning of bravery. This fantasy novel takes readers on a captivating journey filled with enchantment and wonder.",
    rating: 4.8,
  },
  {
    id: 6,
    name: "The Art of Persistence",
    description:
      "This inspirational book tells the stories of individuals who overcame adversity and achieved remarkable success through persistence. It offers practical advice and strategies for developing a resilient mindset and never giving up on your dreams. The book encourages readers to embrace challenges and stay determined in the face of obstacles.",
    rating: 4.6,
  },
];
