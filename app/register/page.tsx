"use client";

import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Guardamos una referencia al formulario
    const form = event.currentTarget;

    const formData = new FormData(form);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");
    const birthDate = formData.get("birthDate");
    const birthPlace = formData.get("birthPlace");
    const height = Number(formData.get("height"));
    const weight = Number(formData.get("weight"));

    const termsAccepted = formData.get("termsAccepted") === "on";
    const privacyAccepted = formData.get("privacyAccepted") === "on";

    const data = {
      firstName,
      lastName,
      email,
      phone,
      password,
      birthDate,
      birthPlace,
      height,
      weight,
      termsAccepted,
      privacyAccepted,
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

      // Limpiamos el formulario únicamente si el registro salió bien
      form.reset();
    } else {
      toast.error(result.message);
    }
  }

  const inputClassName =
    "w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100";

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-6 sm:px-6 sm:py-10 lg:py-12">
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="mb-5 inline-block text-sm font-semibold text-green-800 transition hover:text-green-600 sm:mb-8"
        >
          ← Volver al inicio
        </Link>

        <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-xl shadow-zinc-200/50 sm:rounded-3xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700 sm:text-sm">
            Nueva Era Fitness
          </p>

          <h1 className="mt-3 text-2xl font-bold text-green-950 sm:text-3xl">
            Crear cuenta
          </h1>

          <p className="mt-2 text-sm text-zinc-500 sm:text-base">
            Completá tus datos para solicitar el acceso.
          </p>

          <form
            className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2"
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
                placeholder="Nombre"
                className={inputClassName}
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
                placeholder="Apellido"
                className={inputClassName}
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
                placeholder="micorreo@gmail.com"
                className={inputClassName}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Celular
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="099 123 456"
                className={inputClassName}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Contraseña
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`${inputClassName} pr-12`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-green-800"
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
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
                className={inputClassName}
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
                className={inputClassName}
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
                className={inputClassName}
              />
            </div>
            <div className="md:col-span-2">
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
                className={inputClassName}
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="termsAccepted"
                className="flex cursor-pointer items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition hover:border-zinc-300"
              >
                <input
                  id="termsAccepted"
                  name="termsAccepted"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-green-800 accent-green-800"
                />

                <span className="text-sm leading-6 text-zinc-600">
                  Acepto los{" "}
                  <Link
                    href="/terms"
                    onClick={(event) => event.stopPropagation()}
                    className="font-semibold text-green-800 transition hover:text-green-600"
                  >
                    Términos y Condiciones
                  </Link>
                </span>
              </label>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="privacyAccepted"
                className="flex cursor-pointer items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition hover:border-zinc-300"
              >
                <input
                  id="privacyAccepted"
                  name="privacyAccepted"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-green-800 accent-green-800"
                />

                <span className="text-sm leading-6 text-zinc-600">
                  Acepto la{" "}
                  <Link
                    href="/privacy"
                    onClick={(event) => event.stopPropagation()}
                    className="font-semibold text-green-800 transition hover:text-green-600"
                  >
                    Política de Privacidad
                  </Link>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="mt-2 rounded-2xl bg-green-900 px-6 py-3.5 font-semibold text-white shadow-md shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg active:translate-y-0 md:col-span-2"
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
