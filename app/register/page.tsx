"use client";
import Link from "next/link";

export default function RegisterPage() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const birthDate = formData.get("birthDate");
    const birthPlace = formData.get("birthPlace");
    const height = Number(formData.get("height"));
    const weight = Number(formData.get("weight"));

    const data = {
      firstName,
      lastName,
      email,
      password,
      birthDate,
      birthPlace,
      height,
      weight,
    };

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto w-full max-w-2xl">
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
            Crear cuenta
          </h1>

          <p className="mt-2 text-zinc-500">
            Completá tus datos para solicitar el acceso.
          </p>

          <form
            className="mt-8 grid gap-5 sm:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Nombre
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-green-800"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Apellido
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-green-800"
              />
            </div>

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
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-green-800"
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
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-green-800"
              />
            </div>

            <div>
              <label
                htmlFor="birthDate"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Fecha de nacimiento
              </label>

              <input
                id="birthDate"
                name="birthDate"
                type="date"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-green-800"
              />
            </div>

            <div>
              <label
                htmlFor="birthPlace"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Lugar de nacimiento
              </label>

              <input
                id="birthPlace"
                name="birthPlace"
                type="text"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-green-800"
              />
            </div>

            <div>
              <label
                htmlFor="height"

                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Altura (m)
              </label>

              <input
                id="height"
                name="height"
                type="number"
                step="0.01"
                min="1"
                max="2.5"
                placeholder="1.80"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-green-800"
              />
            </div>

            <div>
              <label
                htmlFor="weight"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Peso (kg)
              </label>

              <input
                id="weight"
                name="weight"
                type="number"
                step="0.1"
                placeholder="75"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-green-800"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-xl bg-green-900 px-6 py-3 font-semibold text-white transition hover:bg-green-800 sm:col-span-2"
            >
              Crear cuenta
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-500">
            ¿Ya tenés una cuenta?{" "}
            <Link href="/login" className="font-semibold text-green-800">
              Iniciá sesión
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
