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

<<<<<<< HEAD
export const shopCatagories = [
  {
    id: 1,
    title: "catagories 1",
    subcatagories: [{ id: 1, title: "subcatagories 1 " }],
  },
  {
    id: 2,
    title: "catagories 2",
    subcatagories: [],
=======
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
>>>>>>> main
  },

  {
    id: 3,
<<<<<<< HEAD
    title: "catagories 3",
    subcatagories: [],
  },

  {
    id: 4,
    title: "catagories 4",
    subcatagories: [{ id: 4, title: "subcatagories 4 " }],
=======
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
>>>>>>> main
  },

  {
    id: 5,
<<<<<<< HEAD
    title: "catagories 5",
    subcatagories: [],
  },
];

export const shopColor = [
  { id: 1, color: "262626", title: "color 1" },
  { id: 2, color: "FF8686", title: "color 2" },
  { id: 3, color: "7ED321", title: "color 3" },
  { id: 4, color: "B6B6B6", title: "color 4" },
  { id: 5, color: "15CBA5", title: "color 5" },
];

export const Brand = [
  { id: 1, title: "brand 1" },
  { id: 2, title: "brand 2" },
  { id: 3, title: "brand 3" },
  { id: 4, title: "brand 4" },
  { id: 5, title: "brand 5" },
  { id: 6, title: "brand 1" },
=======
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

export const shopByBrand = [
  { id: 1, title: "Apex" },
  { id: 2, title: "Apple" },
  { id: 3, title: "Samsumg" },
  { id: 4, title: "HP" },
  { id: 5, title: "Bata" },
];

export const shopByPrice = [
  { id: 1, title: "$0.00 - $9.99" },
  { id: 2, title: "$10.00 - $19.99" },
  { id: 3, title: "$20.00 - $29.99" },
  { id: 4, title: "$30.00 - $39.99" },
  { id: 5, title: "$40.00 - $69.99" },
];

export const SortBy = [
  { id: 1, SortItem: "Cloths" },
  { id: 2, SortItem: "Electronics" },
  { id: 2, SortItem: "Bag" },
  { id: 3, SortItem: "Womens" },
>>>>>>> main
];
