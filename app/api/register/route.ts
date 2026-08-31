import bcrypt from "bcryptjs";
import { db } from "@/src/prisma/db";

export async function POST(request: Request) {
  const data = await request.json();

  //! Verifico los campos obligatorios
  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.phone ||
    !data.password ||
    !data.birthDate ||
    !data.birthPlace ||
    !data.height ||
    !data.weight
  ) {
    return Response.json(
      {
        message: "Todos los campos son obligatorios",
      },
      {
        status: 400,
      },
    );
  }

  //! Verifico la altura
  if (data.height < 1 || data.height > 2.5) {
    return Response.json(
      {
        message: "La altura ingresada no es válida",
      },
      {
        status: 400,
      },
    );
  }

  //! Verifico el peso
  if (data.weight < 20 || data.weight > 300) {
    return Response.json(
      {
        message: "El peso ingresado no es válido",
      },
      {
        status: 400,
      },
    );
  }

  //! Verifico la contraseña
  if (data.password.length < 8 || data.password.length > 15) {
    return Response.json(
      {
        message: "La contraseña debe tener entre 8 y 15 caracteres",
      },
      {
        status: 400,
      },
    );
  }

  //! Normalizamos y verificamos el email
  const email = data.email.trim().toLowerCase();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return Response.json(
      {
        message: "Ingrese un email válido",
      },
      {
        status: 400,
      },
    );
  }

  //! Verificamos la fecha de nacimiento del usuario
  const birthDate = new Date(data.birthDate);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const birthMonth = birthDate.getMonth();
  const currentMonth = today.getMonth();

  const birthDay = birthDate.getDate();
  const currentDay = today.getDate();

  if (currentMonth < birthMonth) {
    age = age - 1;
  }

  if (currentMonth === birthMonth && currentDay < birthDay) {
    age = age - 1;
  }

  if (age < 18) {
    return Response.json(
      {
        message:
          "Aún eres menor de edad, necesitas ser mayor para utilizar la aplicación",
      },
      {
        status: 400,
      },
    );
  }

  //! Limpiamos y verificamos el número de celular
  const phone = data.phone.replace(/\D/g, "");

  const phoneRegex = /^\d{8,15}$/;

  if (!phoneRegex.test(phone)) {
    return Response.json(
      {
        message: "Ingrese un número de teléfono válido",
      },
      {
        status: 400,
      },
    );
  }

  //! Verificamos que el usuario haya aceptado Términos y Condiciones
  if (!data.termsAccepted) {
    return Response.json(
      {
        message: "Debes aceptar los Términos y Condiciones",
      },
      {
        status: 400,
      },
    );
  }

  //! Verificamos que el usuario haya aceptado la Política de Privacidad
  if (!data.privacyAccepted) {
    return Response.json(
      {
        message: "Debes aceptar la Política de Privacidad",
      },
      {
        status: 400,
      },
    );
  }

  //! Verificamos que el usuario no exista
  const existingUser = await db.orm.public.User.where({
    email,
  }).first();

  if (existingUser) {
    return Response.json(
      {
        message: "El usuario ya existe",
      },
      {
        status: 409,
      },
    );
  }

  //! Hasheamos la contraseña antes de guardarla
  const hashedPassword = await bcrypt.hash(data.password, 10);

  //! Creamos el usuario y su progreso inicial en una transacción
  await db.transaction(async (tx) => {
    const user = await tx.orm.public.User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: email,
      phone: phone,
      password: hashedPassword,
      birthDate: data.birthDate,
      birthPlace: data.birthPlace,

      termsAcceptedAt: new Date().toISOString(),
      termsVersion: "1.0",

      privacyAcceptedAt: new Date().toISOString(),
      privacyVersion: "1.0",

      role: "CLIENT",
      status: "PENDING",
    });

    await tx.orm.public.Progress.create({
      weight: data.weight,
      height: data.height,
      userId: user.id,
    });
  });

  return Response.json({
    message: "Usuario creado correctamente",
  });
}