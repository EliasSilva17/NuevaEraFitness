import bcrypt from "bcryptjs";
import { db } from "@/src/prisma/db";
export async function POST(request: Request) {
  const data = await request.json();

  // Verifico los campos
  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
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

  // Verifico la altura
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
  const existingUser = await db.orm.public.User.where({
    email: data.email,
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

  const hashedPassword = await bcrypt.hash(data.password, 10);

  console.log(hashedPassword);

  await db.transaction(async (tx) => {
    const user = await tx.orm.public.User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,
      birthDate: data.birthDate,
      birthPlace: data.birthPlace,
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
