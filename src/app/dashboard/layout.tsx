import { redirect } from "next/navigation";

import { auth } from "@/auth.config";
import { TopMenuDashboard } from "@/components";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session?.user?.role !== "admin") {
    redirect("/");
  }
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 min-h-[500px] px-5 lg:px-10 pt-3">{children}</div>
      <TopMenuDashboard />
    </div>
  );
}
