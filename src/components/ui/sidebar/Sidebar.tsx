import { getCategoriesSideBar } from "@/actions";
import { SideBarData } from "./SideBarData";

export const Sidebar = async () => {
  const categories = await getCategoriesSideBar();
  return <SideBarData categories={categories} />;
};
