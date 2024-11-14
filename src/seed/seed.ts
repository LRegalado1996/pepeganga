import bcryptjs from "bcryptjs";

export interface CategoryInterface {
  name: string;
  childrens?: CategoryInterface[];
}

interface Product {
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

interface user {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
}

interface InitialData {
  categories: CategoryInterface[];
  products: Product[];
  users: user[];
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
      title: "Piedra blanca",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, possimus nam ut repellat porro aperiam nesciunt ratione commodi dolorem aut earum recusandae fugiat nisi, eius, quia necessitatibus excepturi illum qui!",
      price: 300,
      tags: ["blanco"],
      stock: 4,
      slug: "collar_piedra_blanca",
      category: "Piedra",
      images: [
        "/imgs/2/IMG_9119.HEIC",
        "/imgs/2/IMG_9121.HEIC",
        "/imgs/2/IMG_9122.HEIC",
        "/imgs/2/IMG_9123.HEIC",
      ],
    },
    {
      internalId: 3,
      title: "Piedra marron",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, possimus nam ut repellat porro aperiam nesciunt ratione commodi dolorem aut earum recusandae fugiat nisi, eius, quia necessitatibus excepturi illum qui!",
      price: 300,
      tags: ["marron", "amarrillo"],
      stock: 4,
      slug: "collar_piedra_marron",
      category: "Piedra",
      images: [
        "/imgs/3/IMG_9125.HEIC",
        "/imgs/3/IMG_9126.HEIC",
        "/imgs/3/IMG_9127.HEIC",
        "/imgs/3/IMG_9128.HEIC",
        "/imgs/3/IMG_9129.HEIC",
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
};
