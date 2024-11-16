import { mainFont } from "@/config/fonts";

interface Props {
  name: string;
}

export const Title = ({ name }: Props) => {
  return <h2 className={`${mainFont.className} antialiased text-xl font-bold my-2`}>{name}</h2>;
};
