import Link from "next/link";
import { ArrowLeft, FileText, ShieldCheck } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-green-950">
      {/* Fondo decorativo */}
      <div className="relative overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-700/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          <Link
            href="/register"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-green-200 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Volver al registro
          </Link>

          {/* Encabezado */}
          <section className="mb-6 rounded-3xl border border-green-700/40 bg-gradient-to-br from-green-900 to-green-800 p-6 shadow-2xl shadow-black/20 sm:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-400/15 text-green-300">
              <FileText size={24} />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
              Nueva Era Fitness
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Términos y Condiciones
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-green-100/80">
              Estas condiciones establecen las reglas generales para el uso de
              Nueva Era Fitness y sus funcionalidades.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-600/50 bg-green-950/30 px-4 py-2 text-sm font-medium text-green-200">
              <ShieldCheck size={16} />
              Versión 1.0
            </div>
          </section>

          {/* Contenido */}
          <section className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 sm:p-10">
            <div className="space-y-9 text-sm leading-7 text-zinc-600 sm:text-base">
              <TermSection number="01" title="Uso de la plataforma">
                Nueva Era Fitness es una plataforma destinada a facilitar el
                seguimiento de rutinas, progreso físico, pagos, comunicación y
                otros servicios relacionados con el entrenamiento personal.
              </TermSection>

              <TermSection number="02" title="Registro y cuenta">
                El usuario se compromete a proporcionar información verdadera,
                completa y actualizada durante el registro y mientras utilice la
                plataforma.
              </TermSection>

              <TermSection number="03" title="Acceso al servicio">
                El registro de una cuenta no implica su activación inmediata.
                Algunas cuentas pueden requerir aprobación previa antes de
                acceder a todas las funcionalidades de Nueva Era Fitness.
              </TermSection>

              <TermSection number="04" title="Rutinas y seguimiento">
                Las rutinas, recomendaciones y registros disponibles en la
                plataforma forman parte del seguimiento realizado entre el
                usuario y su entrenador.
              </TermSection>

              <TermSection number="05" title="Pagos y suscripciones">
                Cuando corresponda, los pagos podrán realizarse mediante los
                medios habilitados en la plataforma. La disponibilidad de
                determinados servicios podrá depender del estado del pago o de
                la suscripción del usuario.
              </TermSection>

              <TermSection number="06" title="Responsabilidad del usuario">
                El usuario es responsable de mantener la seguridad de sus datos
                de acceso y de informar cualquier uso no autorizado de su
                cuenta.
              </TermSection>

              <TermSection number="07" title="Modificaciones">
                Estos términos podrán actualizarse cuando sea necesario. En caso
                de modificaciones relevantes, podrá solicitarse al usuario una
                nueva aceptación.
              </TermSection>

              <TermSection number="08" title="Contacto">
                Ante dudas relacionadas con el funcionamiento de la plataforma o
                estos términos, el usuario podrá comunicarse mediante los
                canales de contacto habilitados por Nueva Era Fitness.
              </TermSection>
            </div>

            <div className="mt-10 rounded-2xl border border-green-100 bg-green-50 p-5">
              <div className="flex gap-3">
                <ShieldCheck
                  className="mt-0.5 shrink-0 text-green-800"
                  size={20}
                />

                <p className="text-sm leading-6 text-green-950">
                  Al crear una cuenta y aceptar estos términos, el usuario
                  confirma haber leído y aceptado la versión vigente de los
                  Términos y Condiciones.
                </p>
              </div>
            </div>
          </section>

          <p className="py-8 text-center text-xs text-green-200/60">
            Nueva Era Fitness · Términos y Condiciones
          </p>
        </div>
      </div>
    </main>
  );
}

type TermSectionProps = {
  number: string;
  title: string;
  children: React.ReactNode;
};

function TermSection({ number, title, children }: TermSectionProps) {
  return (
    <div className="border-b border-zinc-100 pb-8 last:border-none last:pb-0">
      <div className="flex gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xs font-bold text-green-800">
          {number}
        </span>

        <div>
          <h2 className="text-lg font-bold text-green-950">{title}</h2>

          <p className="mt-2">{children}</p>
        </div>
      </div>
    </div>
  );
}
