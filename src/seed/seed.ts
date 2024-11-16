import bcryptjs from "bcryptjs";

export interface CategoryInterface {
  name: string;
  childrens?: CategoryInterface[];
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
      childrens: [
        { name: "Anillos" },
        { name: "Pulseras" },
        {
          name: "Collares",
          childrens: [{ name: "Piedra" }, { name: "Letra" }, { name: "Signos" }, { name: "Otros" }],
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
      password: bcryptjs.hashSync("123456", 10),
      name: "Admin",
      role: "admin",
    },
    {
      email: "user@email.com",
      password: bcryptjs.hashSync("123456", 10),
      name: "User",
      role: "user",
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
