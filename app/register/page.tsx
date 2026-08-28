"use client";

import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

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

    const result = await response.json();

    if (response.ok) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-semibold text-green-800 transition hover:text-green-600"
        >
          ← Volver al inicio
        </Link>

        <div className="rounded-3xl border border-zinc-100 bg-white p-8 shadow-xl shadow-zinc-200/50">
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
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Nombre
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Elias"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Apellido
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Silva"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Correo electrónico
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="elias@email.com"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Contraseña
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div>
              <label
                htmlFor="birthDate"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Fecha de nacimiento
              </label>

              <input
                id="birthDate"
                name="birthDate"
                type="date"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 shadow-sm outline-none transition hover:border-zinc-300 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div>
              <label
                htmlFor="birthPlace"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Lugar de nacimiento
              </label>

              <input
                id="birthPlace"
                name="birthPlace"
                type="text"
                placeholder="Montevideo"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div>
              <label
                htmlFor="height"
                className="mb-2 block text-sm font-medium text-zinc-700"
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
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div>
              <label
                htmlFor="weight"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Peso (kg)
              </label>

              <input
                id="weight"
                name="weight"
                type="number"
                step="0.1"
                placeholder="75"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100"
              />
            </div>

            <button
              type="submit"
              className="mt-3 rounded-2xl bg-green-900 px-6 py-3.5 font-semibold text-white shadow-md shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg active:translate-y-0 sm:col-span-2"
            >
              Crear cuenta
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-500">
            ¿Ya tenés una cuenta?{" "}
            <Link
              href="/login"
              className="font-semibold text-green-800 transition hover:text-green-600"
            >
              Iniciá sesión
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
