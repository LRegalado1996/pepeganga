import { RegisterForm, Title } from "@/components";
import { redirect } from "next/navigation";

import { auth } from "@/auth.config";

export default async function newAccountPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/profile");
  }

  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <Title name={"Regístrate"} />

      <RegisterForm />
    </div>
  );
}
