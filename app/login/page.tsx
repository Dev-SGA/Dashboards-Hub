import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BRAND } from "@/lib/brand";
import { AUTH_COOKIE, expectedAuthToken, hubPassword } from "@/lib/auth";

async function login(formData: FormData) {
  "use server";

  const password = formData.get("password");
  const next = typeof formData.get("next") === "string" ? formData.get("next") : "/";

  if (password === hubPassword()) {
    const jar = await cookies();
    jar.set(AUTH_COOKIE, await expectedAuthToken(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    redirect(typeof next === "string" && next.startsWith("/") ? next : "/");
  }

  redirect("/login?error=1");
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;

  return (
    <main className="login">
      <form className="login__card" action={login}>
        <img
          className="login__logo"
          src={BRAND.logos.horizontal}
          alt={BRAND.name}
        />
        <h1 className="login__title">Dashboards Hub</h1>
        <p className="login__subtitle">Enter the access password to continue.</p>

        <input type="hidden" name="next" value={next ?? "/"} />
        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          autoFocus
          required
        />
        {error ? <p className="login__error">Incorrect password. Try again.</p> : null}

        <button className="login__button" type="submit">
          Sign in
        </button>
        <p className="login__footer">{BRAND.legal}</p>
      </form>
    </main>
  );
}
