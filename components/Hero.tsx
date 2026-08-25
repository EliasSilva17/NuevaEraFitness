import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-12 pt-28 lg:grid-cols-2 lg:pt-24">
      <div className="max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-700 sm:text-sm">
          Nueva Era Fitness
        </p>

        <h1 className="text-4xl font-bold leading-tight text-green-950 sm:text-5xl lg:text-6xl">
          Tu progreso, tus rutinas y tu entrenamiento en un solo lugar
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
          Accedé a tus rutinas, registrá tu progreso y llevá un seguimiento de
          tus entrenamientos.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/login"
            className="rounded-xl bg-green-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-800"
          >
            Iniciar sesión
          </Link>

          <Link
            href="/register"
            className="rounded-xl border border-green-900 px-6 py-3 text-center font-semibold text-green-900 transition hover:bg-green-50"
          >
            Registrarme
          </Link>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="w-full max-w-md overflow-hidden rounded-3xl shadow-xl lg:max-w-lg">
          <Image
            src="/images/hero-fitness.webp"
            alt="Nueva Era Fitness"
            width={520}
            height={650}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}