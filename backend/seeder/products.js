const products = [
    {
    name: "Propofol",
    description:
      "Used for induction and maintenance of general anesthesia",
    count: 5,
    price: 100,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "Etomidate",
    description:
      "Used for induction of anesthesia",
    count: 5,
    price: 500,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Ketamine",
    description:
      "Used for induction and maintenance of anesthesia",
    count: 5,
    price: 200,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.png" },
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Fentanyl",
    description:
      "Used for pain relief and sedation",
    count: 5,
    price: 100,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Lidocaine",
    description:
      "Used for local anesthesia",
    count: 10,
    price: 700,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Bupivacaine",
    description:
      "Used for regional anesthesia",
    count: 15,
    price: 800,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.png" },
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Sevoflurane",
    description:
      "Used for induction and maintenance of general anesthesia",
    count: 20,
    price: 400,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
      { path: "/images/medicine-2.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product8  Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Product9  Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product10  Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product11  Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.png" },
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product12  Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
      { path: "/images/medicine-2.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product13  Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Product14  Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product15  Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product16  Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.png" },
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product17  Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
      { path: "/images/medicine-2.jpg" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Clarithromycin",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Anesthetics",
    images: [
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Cllindamycin",
    description:
      "Hello world",
    count: 25,
    price: 500,
    category: "Analgesics",
    images: [
      { path: "/images/medicine-2.jpg" },
      { path: "/images/medicine-1.jpg" },
      { path: "/images/medicine-2.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
]

module.exports = products