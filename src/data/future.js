import fp1 from "../assets/featured/fp1.webp";
import fp2 from "../assets/featured/fp2.webp";
import fp3 from "../assets/featured/fp3.webp";
import fp4 from "../assets/featured/fp4.webp";
import fp5 from "../assets/featured/fp5.webp";
import fp5_5 from "../assets/featured/fp5-5.webp";
import fp6 from "../assets/featured/fp6.webp";
import fp7 from "../assets/featured/fp7.webp";
import fp7_7 from "../assets/featured/fp7-7.webp";
import fp8 from "../assets/featured/fp8.webp";
import fp8_8 from "../assets/featured/fp8-8.webp";
import fp9 from "../assets/featured/fp9.webp";
import fp10 from "../assets/featured/fp10.webp";
import fp10_10 from "../assets/featured/fp10-10.webp";
import fp11 from "../assets/featured/fp11.webp";
import fp12 from "../assets/featured/fp12.webp";

const products = [
  {
    id: 11,
    name: "NoizeGaze est 2023",
    price: "145k",
    src: [fp1, fp1, fp1, fp1],
    description:
      "Dedikasi artwork Band alternatif Bandung tahun 2023",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },

  {
    id: 12,
    name: "Alkitab Arabian",
    price: "145k",
    src: [fp2, fp2, fp2, fp2],
    description:
      "Komik kitab arab dipadukan dengan art leo white and black, interpretasi bahwa agama tidak memandang warna kulit",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 13,
    name: "Beatles Cone",
    price: "145k",
    src: [fp3, fp3, fp3, fp3],
    description:
      "Komik The Beatles dijadikan cone jalanan presisi dengan zebracross abbeyroad di album the beatles",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 14,
    name: "Last One To Die",
    price: "145k",
    src: [fp4, fp4, fp4, fp4],
    description:
      "Artwork rancid band menjadi salah satu referensi font isoneday dengan slogan give me the merch",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 15,
    name: "Music Seri",
    price: "145k",
    src: [fp5, fp5_5, fp5, fp5_5],
    description:
      "Isoneday Font Music",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 16,
    name: "Ice Cream Kids",
    price: "145k",
    src: [fp6, fp6, fp6, fp6],
    description:
      "Leo dan Becky visualisasi ice cream untuk mengenang masa kecil.",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },
// baru
  {
    id: 17,
    name: "Isoneday Flower",
    price: "145k",
    src: [fp7, fp7_7, fp7, fp7_7],
    description:
      "Memvisualisasikan bungan kedalam artwork baru untuk feminisme dan neo feminisme menjadi perbedaan yang menyatu untuk dikenakan unisex, lucu, tapi tetap eyecathing",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "White",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 18,
    name: "Isoneday Flower",
    price: "145k",
    src: [fp8, fp8_8, fp8, fp8_8],
    description:
      "Memvisualisasikan bungan kedalam artwork baru untuk feminisme dan neo feminisme menjadi perbedaan yang menyatu untuk dikenakan unisex, lucu, tapi tetap eyecathing",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 19,
    name: "Leo Black",
    price: "145k",
    src: [fp9, fp9, fp9, fp9],
    description:
      "Gambaran abstrak leo dengan hobi dan impiannya",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 20,
    name: "Isoneday Font",
    price: "145k",
    src: [fp10, fp10_10, fp10, fp10_10],
    description:
      "Perkenalan font Isoneday terbaru",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 21,
    name: "backy Drive to City",
    price: "145k",
    src: [fp11, fp11, fp11, fp11],
    description:
      "Perjalanan singkat Becky dengan kendaraan zuper melintasi kota kumuh diatas mimpi",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "White",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 22,
    name: "Isoneday Gravity",
    price: "145k",
    src: [fp12, fp12, fp12, fp12],
    description:
      "Mode gaya gravity dengan unsur campuran petir dan semburan api",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },
];

export default products;
