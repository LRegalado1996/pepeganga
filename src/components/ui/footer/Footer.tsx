import Link from "next/link";
import React from "react";
import { IoInformationCircle, IoLogoWhatsapp } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-ivory p-3 mt-6">
      <ul className="flex gap-5 justify-center items-center w-full text-xs">
        <li>
          <a
            href="https://wa.me/+59891475727"
            target="_blank"
            className="flex hover:underline items-center"
          >
            <IoLogoWhatsapp className="mr-1" />
            Contacto
          </a>
        </li>
        <li>|</li>
        <li>
          <Link href="/" className="flex hover:underline items-center">
            <IoInformationCircle className="mr-1" />
            ¿Como comprar?
          </Link>
        </li>
      </ul>
    </footer>
  );
};
