import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const number = searchParams.get("number");
  try {
    const countrysFlag = await prisma.countrysFlag.findUnique({
      where: {
        number: parseInt(number as string),
      },
    });

    return Response.json({
      message: "OK",
      data: countrysFlag,
    });
  } catch (error) {
    throw error;
  }
}

async function POST(req: Request) {
  const body = await req.json();
  console.log(body);

  try {
    const countrysFlag = await prisma.countrysFlag.create({
      data: {
        countryName: body.resposta,
        easyflagLink: body.easyImageLink,
        hardflagLink: body.hardImageLink,
      },
    });

    return Response.json({
      message: `You sent data with succes!`,
      data: countrysFlag,
    });
  } catch (error) {
    throw error;
  }
}
export { GET, POST };
