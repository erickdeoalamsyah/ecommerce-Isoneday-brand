import kaos1 from "../assets/product/kaos1.webp";
import kaos1_1 from "../assets/product/kaos1-1.webp";
import kaos2 from "../assets/product/kaos2.webp";
import kaos2_2 from "../assets/product/kaos2-2.webp";
import kaos3 from "../assets/product/kaos3.webp";
import kaos3_3 from "../assets/product/kaos3-3.webp";
import kaos4 from "../assets/product/kaos4.webp";
import kaos4_4 from "../assets/product/kaos4-4.webp";
import kaos5 from "../assets/product/kaos5.webp";
import kaos5_5 from "../assets/product/kaos5-5.webp";
import kaos6 from "../assets/product/kaos6.webp";
import kaos7 from "../assets/product/kaos7.webp";
import kaos8 from "../assets/product/kaos8.webp";
import kaos9 from "../assets/product/kaos9.webp";
import kaos9_9 from "../assets/product/kaos9-9.webp";
import topi1 from "../assets/product/topi1.webp";
import topi1_1 from "../assets/product/topi1-1.webp";

const products = [
  {
    id: 1,
    name: "Freedom Is Just A Dream",
    price: "145k",
    src: [kaos1, kaos1_1, kaos1, kaos1_1],
    description:
      "Tentang kebebasan dalam membuat karya, selalu saja ada tuntutan dan batasan yang tidak bisa dipungkiri semua gejolak remaja sangat antusias untuk berkarya sesuai aoa yang mereka inginkan. Menurut gua karya ini menjelaskan tentang bagaimana seseorang senang menggambar dan tak ingin ada batasan, selagi pure asli buah tangan sendiri.",
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
    id: 2,
    name: "KCDTY'MSR",
    price: "145k",
    src: [kaos2, kaos2_2, kaos2, kaos2_2],
    description:
      "Karya dari kanvas isoneday_studio : arti pengenalan lebih intim kepada diri sendiri tentang hobby dan kesukaan dalam lisensi dunia Musik dan Senirupa. tercipta karya abstrak ekspresionis dengan 2 ikon karakter fun colour yang disebut Kode Cinta Dari Tuhan Yang Maha SeniRupa",
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
    id: 3,
    name: "Skateboarding",
    price: "145k",
    src: [kaos3, kaos3_3, kaos3, kaos3_3],
    description:
      "Artikel ini rilis pada tanggal 21 june 2024 Dibarengin dengan hari skate dunia",
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
    id: 4,
    name: "Ideasplace",
    price: "145k",
    src: [kaos4, kaos4_4, kaos4, kaos4_4],
    description:"Sebagai tempat buang air kecil (BAK) khususnya untuk kaum pria, Mencakup semua ruangan (Toilet) tidak bisa dipungkiri toilet adalah ruangan yang sangat mistis, kebanyakan manusia banyak mendapatkan ide gila dan sedikit aneh didalamnya, Bahkan berdiri sebentar didepan urinoir sepersekian detik ide akan muncul dengan sendirinya.",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Red",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 5,
    name: "Freedom Is Just A Dream",
    price: "145k",
    src: [kaos5, kaos5_5, kaos5, kaos5_5],
    description: "Tentang kebebasan dalam membuat karya, selalu saja ada tuntutan dan batasan yang tidak bisa dipungkiri semua gejolak remaja sangat antusias untuk berkarya sesuai aoa yang mereka inginkan. Menurut gua karya ini menjelaskan tentang bagaimana seseorang senang menggambar dan tak ingin ada batasan, selagi pure asli buah tangan sendiri.",
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
    id: 6,
    name: "Maroon",
    price: "145k",
    src:[kaos6, kaos6, kaos6, kaos6],
    description: "Karya ini didedikasikan buat teman-teman yang senang bermusik dengan beragam Genre, ataupun kawan yang menghargai karya SENILUKIS. Karya ini sebagai acuan pertama sebagai merchandise ISONEDAY.",
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
    id: 7,
    name: "Four Vector Army",
    price: "145k",
    src: [kaos7, kaos7, kaos7, kaos7],
    description: "Artwork gambar dari 4 potongan kepala yang memvisualisasikan karakter personil dari band yang sedang gua jalani sekarang yaitu (CATYN) dari goresan ide-ide spontan dan beberapa referensi, muncullah karakter dalam berbentuk “Vector” dari goresan tangan saya secara ajaib, jadi sangat tidak berfilosofis sebagaimana gambar-gambar seni sesenian lainnya, ini hanya artwork bebas untuk diartikan tidak ada larangan, ini hanya untuk keren-kerenan.",
    categories: ["Streetwear", "T-shirt", "Unisex"],
    tags: ["street", "fashion"],
    weight: "130-150 g",
    dimension: "P: 42-48 cm, L: 58-64 cm",
    sizes: ["M", "L", "XL"],
    color: "Army",
    storage: "Warehouse 1",
    reviews: 137,
  },
  {
    id: 8,
    name: "For Vector White",
    price: "145k",
    src: [kaos8, kaos8, kaos8, kaos8],
    description: "Artwork gambar dari 4 potongan kepala yang memvisualisasikan karakter personil dari band yang sedang gua jalani sekarang yaitu (CATYN) dari goresan ide-ide spontan dan beberapa referensi, muncullah karakter dalam berbentuk “Vector” dari goresan tangan saya secara ajaib, jadi sangat tidak berfilosofis sebagaimana gambar-gambar seni sesenian lainnya, ini hanya artwork bebas untuk diartikan tidak ada larangan, ini hanya untuk keren-kerenan.",
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
    id: 9,
    name: "Isoneday x Liggennnn Jersey",
    price: "275k",
    src:[kaos9, kaos9_9, kaos9, kaos9_9],
    description: "Collaboration 2024",
    categories: ["Streetwear", "Jersey", "Unisex"],
    tags: ["street", "fashion"],
    weight: "200-220 g",
    dimension: "P: 60-66 cm, L: 74-80 cm",
    sizes: ["M", "L", "XL"],
    color: "Black and Red",
    storage: "Warehouse 1",
    reviews: 137,
    soldOut:true

  },
  {
    id: 10,
    name: "Snapback Classic Seri Black",
    price: "135k",
    src: [topi1, topi1_1, topi1, topi1_1],
    description: "Trucker hat",
    categories: ["Streetwear", "Trucker Hat", "Unisex"],
    tags: ["street", "fashion"],
    weight: "100-120 g",
    dimension: "P: 20-24 cm, L: 25-29 cm",
    sizes: ["M", "L", "XL"],
    color: "Black",
    storage: "Warehouse 1",
    reviews: 137,
  },
];

export default products;
