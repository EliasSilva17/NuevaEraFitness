import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-10 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-lg font-black tracking-tight text-green-950 sm:text-xl"
        >
          NUEVA ERA <span className="text-green-600">FITNESS</span>
        </Link>

        <Link
          href="/login"
          className="text-sm font-semibold text-green-900 transition hover:text-green-700"
        >
          Iniciar sesión
        </Link>
      </div>
    </header>
  );
}