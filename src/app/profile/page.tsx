import { redirect } from "next/navigation";

import { auth } from "@/auth.config";
import { Title } from "@/components";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="m-5">
      <Title name="Perfil" />

      <h3 className="text-xl uppercase font-bold">{session.user.role}</h3>

      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  );
}
