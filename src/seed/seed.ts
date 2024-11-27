import bcryptjs from "bcryptjs";

export interface CategoryInterface {
  name: string;
  childrens?: CategoryInterface[];
  slug: string;
  image: string;
}

export interface Product {
  internalId: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  stock: number;
  slug: string;
  category: string;
  images: string[];
}

interface User {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
  phone: string;
}

export interface ProductList {
  title: string;
  products: number[];
}

interface InitialData {
  categories: CategoryInterface[];
  products: Product[];
  users: User[];
  productList: ProductList[];
}
export const initialData: InitialData = {
  categories: [
    {
      name: "Bijouterie",
      slug: "/bijouterie",
      image: "/imgs/categories/bijouterie.png",
      childrens: [
        {
          name: "Anillos",
          slug: "/bijouterie/anillos",
          image: "/imgs/categories/anillos.png",
        },
        {
          name: "Pulseras",
          slug: "/bijouterie/pulseras",
          image: "/imgs/categories/pulseras.png",
        },
        {
          name: "Collares",
          slug: "/bijouterie/collares",
          image: "/imgs/categories/collar.png",
          childrens: [
            {
              name: "Piedra",
              slug: "/bijouterie/collares/piedra",
              image: "/imgs/categories/collar-piedra.png",
            },
            {
              name: "Letra",
              slug: "/bijouterie/collares/letra",
              image: "/imgs/categories/collar-letras.png",
            },
            {
              name: "Signos",
              slug: "/bijouterie/collares/signos",
              image: "/imgs/categories/collar-signo.png",
            },
            {
              name: "Otros",
              slug: "/bijouterie/collares/otros",
              image: "/imgs/categories/collar-otro.png",
            },
          ],
        },
      ],
    },
  ],
  products: [
    {
      internalId: 2,
      title: "Collar con piedra de Ágata Blanca (blanco)",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, possimus nam ut repellat porro aperiam nesciunt ratione commodi dolorem aut earum recusandae fugiat nisi, eius, quia necessitatibus excepturi illum qui!",
      price: 300,
      tags: ["blanco", "acero quirúrgico"],
      stock: 4,
      slug: "collar_piedra_blanca",
      category: "Piedra",
      images: ["/imgs/2/2-1.png", "/imgs/2/2-2.png", "/imgs/2/2-3.png", "/imgs/2/2-4.png"],
    },
    {
      internalId: 3,
      title: "Collar con piedra de Cuarzo Ahumado (marron)",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, possimus nam ut repellat porro aperiam nesciunt ratione commodi dolorem aut earum recusandae fugiat nisi, eius, quia necessitatibus excepturi illum qui!",
      price: 300,
      tags: ["marron", "amarrillo", "acero quirúrgico"],
      stock: 4,
      slug: "collar_piedra_marron",
      category: "Piedra",
      images: [
        "/imgs/3/3-1.png",
        "/imgs/3/3-2.png",
        "/imgs/3/3-3.png",
        "/imgs/3/3-4.png",
        "/imgs/3/3-5.png",
      ],
    },
  ],
  users: [
    {
      email: "admin@email.com",
      password: bcryptjs.hashSync("123456"),
      name: "Admin",
      role: "admin",
      phone: "091475727",
    },
    {
      email: "user@email.com",
      password: bcryptjs.hashSync("123456"),
      name: "User",
      role: "user",
      phone: "091475727",
    },
  ],

  productList: [
    {
      title: "HOME",
      products: [2, 3],
    },
    {
      title: "Oferta de la semana",
      products: [3],
    },
  ],
};
