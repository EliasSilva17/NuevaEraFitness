import bcrypt from "bcryptjs";
import { db } from "@/src/prisma/db";
export async function POST(request: Request) {
  const data = await request.json();

      const hashedPassword = await bcrypt.hash(data.password, 10);
      const existingUser = await 
      console.log(hashedPassword);
      
      const user = await db.orm.public.User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashedPassword,
        birthDate: data.birthDate,
        birthPlace: data.birthPlace,
        role: "CLIENT",
        status: "PENDING",
      });
      
      return Response.json({
        message: "Usuario creado correctamente",
      });
  


}
