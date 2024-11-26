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

      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  );
}
