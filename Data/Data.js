import img1 from "../src/assets/p.png";
import img2 from "../src/assets/product2.png";
import img3 from "../src/assets/p3.png";
import img4 from "../src/assets/p4.png";

// best sellilng img import
import bs1 from "../src/assets/bestSellilng/b1.png";
import bs2 from "../src/assets/bestSellilng/b2.png";
import bs3 from "../src/assets/bestSellilng/b3.png";
import bs4 from "../src/assets/bestSellilng/b4.png";
import { flushSync } from "react-dom";

export const ProductData = [
  {
    id: 1,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bazge: true,
    color: false,
    img: img1,
    bazgeitem: true,
    discountOffter: "20%",
  },
  {
    id: 2,
    title: "Basic Crew Neck Tee",
    price: "$54.00",
    bazge: true,
    color: true,
    img: img2,
    bazgeitem: true,
    discountOffter: "20%",
  },

  {
    id: 3,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bazge: false,
    color: true,
    img: img3,
    bazgeitem: true,
    discountOffter: "25%",
  },

  {
    id: 4,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bazge: true,
    color: false,
    img: img4,
    bazgeitem: false,
    discountOffter: "10%",
  },
];

export const BestSellingProduct = [
  {
    id: 1,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bazge: true,
    color: true,
    img: bs1,
    bazgeitem: true,
    discountOffter: "20%",
  },
  {
    id: 2,
    title: "Basic Crew Neck Tee",
    price: "$54.00",
    bazge: true,
    color: true,
    img: bs2,
    bazgeitem: true,
    discountOffter: "20%",
  },

  {
    id: 3,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bazge: false,
    color: true,
    img: bs3,
    bazgeitem: true,
    discountOffter: "25%",
  },

  {
    id: 4,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bazge: true,
    color: false,
    img: bs4,
    bazgeitem: false,
    discountOffter: "10%",
  },
];

export const SpeacialOffer = [
  {
    id: 1,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bazge: true,
    color: true,
    img: bs1,
    bazgeitem: true,
    discountOffter: "20%",
  },
  {
    id: 2,
    title: "Basic Crew Neck Tee",
    price: "$54.00",
    bazge: true,
    color: true,
    img: bs2,
    bazgeitem: true,
    discountOffter: "20%",
  },

  {
    id: 3,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bazge: true,
    color: true,
    img: bs3,
    bazgeitem: true,
    discountOffter: "25%",
  },

  {
    id: 4,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bazge: true,
    color: false,
    img: bs4,
    bazgeitem: true,
    discountOffter: "10%",
  },
];

export const catagories = [
  {
    id: 1,
    title: "Mobile",
    subcatgores: [
      { id: 1, title: "Xiamoi" },
      { id: 2, title: "Oppo" },
      { id: 3, title: "Vivo" },
      { id: 4, title: "Samsung" },
    ],
  },
  {
    id: 2,
    title: "Apple",
    subcatgores: [
      { id: 1, title: "Iphone 5" },
      { id: 2, title: "Iphone 6" },
      { id: 3, title: "Iphone 8" },
      { id: 4, title: "Iphone 10" },
      { id: 5, title: "Iphone 11" },
      { id: 6, title: "Iphone 11 pro max" },
    ],
  },

  {
    id: 3,
    title: "Desktop",
    subcatgores: [
      { id: 1, title: "Asus" },
      { id: 2, title: "Walton" },
      { id: 3, title: "Gigabyte" },
    ],
  },
  {
    id: 4,
    title: "Accesoris",
    subcatgores: [],
  },

  {
    id: 5,
    title: "Cloths",
    subcatgores: [
      { id: 1, title: "Mens" },
      { id: 2, title: "Women's" },
      { id: 3, title: "Baby" },
    ],
  },
];

export const shopByColor = [
  { id: 1, colorCode: "#000000", title: "Black" },
  { id: 2, colorCode: "#FF8686", title: "Pink" },
  { id: 3, colorCode: "#7ED321", title: "Green" },
  { id: 4, colorCode: "#B6B6B6", title: "OffWhite" },
  { id: 5, colorCode: "#15CBA5", title: "Blue" },
];
