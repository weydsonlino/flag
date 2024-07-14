import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function POST(req: Request) {
  const body = await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
        type: body.userType,
      },
    });

    return Response.json({
      message: `You sent data with succes!`,
      data: user,
    });
  } catch (error) {
    throw error;
  }
}
export { POST };