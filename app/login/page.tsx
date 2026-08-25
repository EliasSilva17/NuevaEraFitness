import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-semibold text-green-800"
        >
          ← Volver al inicio
        </Link>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Nueva Era Fitness
          </p>

          <h1 className="mt-3 text-3xl font-bold text-green-950">
            Iniciar sesión
          </h1>

          <p className="mt-2 text-zinc-500">
            Ingresá a tu cuenta para continuar.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Correo electrónico
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="correo@ejemplo.com"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-green-800"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Contraseña
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-green-800"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-900 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Iniciar sesión
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-500">
            ¿Todavía no tenés cuenta?{" "}
            <Link
              href="/register"
              className="font-semibold text-green-800"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}