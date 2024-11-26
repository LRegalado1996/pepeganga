import { auth } from "@/auth.config";
import { getCategoriesSideBar } from "@/actions";
import { SideBarData } from "./SideBarData";

export const Sidebar = async () => {
  const categories = await getCategoriesSideBar();
  const session = await auth();

  return <SideBarData categories={categories} session={session} />;
};
