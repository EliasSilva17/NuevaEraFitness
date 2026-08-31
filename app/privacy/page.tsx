import Link from "next/link";
import { ArrowLeft, LockKeyhole, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-green-950">
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

          <section className="mb-6 rounded-3xl border border-green-700/40 bg-gradient-to-br from-green-900 to-green-800 p-6 shadow-2xl shadow-black/20 sm:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-400/15 text-green-300">
              <LockKeyhole size={24} />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
              Nueva Era Fitness
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Política de Privacidad
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-green-100/80">
              Esta política explica qué información utiliza Nueva Era Fitness,
              para qué se utiliza y cómo se protege dentro de la plataforma.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-600/50 bg-green-950/30 px-4 py-2 text-sm font-medium text-green-200">
              <ShieldCheck size={16} />
              Versión 1.0
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 sm:p-10">
            <div className="space-y-9 text-sm leading-7 text-zinc-600 sm:text-base">
              <PrivacySection number="01" title="Información que recopilamos">
                Nueva Era Fitness podrá almacenar datos proporcionados por el
                usuario durante el registro y el uso de la plataforma, como
                nombre, apellido, correo electrónico, número de celular, fecha y
                lugar de nacimiento.
              </PrivacySection>

              <PrivacySection number="02" title="Datos de progreso físico">
                La plataforma podrá almacenar información relacionada con el
                seguimiento físico del usuario, como peso, altura y otros datos
                de progreso que sean utilizados para el acompañamiento del
                entrenamiento.
              </PrivacySection>

              <PrivacySection number="03" title="Rutinas y actividad">
                Podrán almacenarse rutinas asignadas, ejercicios realizados,
                registros de peso utilizado y demás información vinculada al
                seguimiento del entrenamiento dentro de la plataforma.
              </PrivacySection>

              <PrivacySection number="04" title="Uso de la información">
                Los datos serán utilizados para gestionar la cuenta del usuario,
                brindar acceso a las funcionalidades de Nueva Era Fitness,
                facilitar el seguimiento del entrenamiento y permitir la
                comunicación relacionada con el servicio.
              </PrivacySection>

              <PrivacySection number="05" title="Pagos y suscripciones">
                Cuando se utilicen servicios de pago externos, Nueva Era Fitness
                podrá almacenar información necesaria para identificar el estado
                de pagos o suscripciones. Los datos sensibles de pago serán
                gestionados por los proveedores de pago correspondientes.
              </PrivacySection>

              <PrivacySection number="06" title="Protección de la información">
                Se aplicarán medidas técnicas y organizativas razonables para
                proteger la información almacenada y reducir el riesgo de acceso
                no autorizado, pérdida o utilización indebida de los datos.
              </PrivacySection>

              <PrivacySection number="07" title="Actualización de datos">
                El usuario podrá solicitar o realizar la actualización de sus
                datos personales mediante las funcionalidades habilitadas en la
                plataforma.
              </PrivacySection>

              <PrivacySection
                number="08"
                title="Conservación de la información"
              >
                Los datos podrán conservarse mientras la cuenta permanezca
                activa o durante el tiempo necesario para brindar el servicio,
                cumplir obligaciones aplicables o resolver situaciones
                relacionadas con la cuenta.
              </PrivacySection>

              <PrivacySection number="09" title="Cambios en esta política">
                Esta Política de Privacidad podrá actualizarse cuando cambien
                las funcionalidades de la plataforma o resulte necesario
                modificar la forma en que se tratan los datos.
              </PrivacySection>

              <PrivacySection number="10" title="Contacto">
                Ante consultas relacionadas con sus datos personales o con esta
                Política de Privacidad, el usuario podrá utilizar los canales de
                contacto habilitados por Nueva Era Fitness.
              </PrivacySection>
            </div>

            <div className="mt-10 rounded-2xl border border-green-100 bg-green-50 p-5">
              <div className="flex gap-3">
                <ShieldCheck
                  className="mt-0.5 shrink-0 text-green-800"
                  size={20}
                />

                <p className="text-sm leading-6 text-green-950">
                  Al aceptar esta política durante el registro, se guarda la
                  fecha de aceptación y la versión correspondiente para mantener
                  un registro de la autorización otorgada.
                </p>
              </div>
            </div>
          </section>

          <p className="py-8 text-center text-xs text-green-200/60">
            Nueva Era Fitness · Política de Privacidad
          </p>
        </div>
      </div>
    </main>
  );
}

type PrivacySectionProps = {
  number: string;
  title: string;
  children: React.ReactNode;
};

function PrivacySection({ number, title, children }: PrivacySectionProps) {
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
