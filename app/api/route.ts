import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function GET() {
  try {
    const challenger = await prisma.challenger.findMany();
    return Response.json({
      message: "OK",
      data: challenger,
    });
  } catch (error) {
    throw error;
  }
}

async function POST(req: Request) {
  const body = await req.json();

  try {
    const challenger = await prisma.challenger.create({
      data: {
        countryName: body.resposta,
        flagLink: body.imageLink,
      },
    });

    return Response.json({
      message: `You sent data with succes!`,
      data: challenger,
    });
  } catch (error) {
    throw error;
  }
}
export { GET, POST };