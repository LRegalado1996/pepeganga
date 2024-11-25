import { mainFont } from "@/config/fonts";

interface Props {
  name: string;
  className?: string;
}

export const Title = ({ name, className }: Props) => {
  return (
    <h2 className={`${mainFont.className} antialiased text-xl font-bold mb-5 ${className}`}>
      {name}
    </h2>
  );
};
