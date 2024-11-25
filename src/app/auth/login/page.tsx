import { LoginForm, Title } from "@/components";

export default function loginPage() {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <Title name={"Ingresar"} />

      <LoginForm />
    </div>
  );
}
