import { auth } from "@/auth.config";
import { LoginForm, Title } from "@/components";
import { redirect } from "next/navigation";

export default async function loginPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <Title name={"Ingresar"} />

      <LoginForm />
    </div>
  );
}
