import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function GET() {
  try {
    const countrysFlag = await prisma.countrysFlag.findMany();
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
async function PUT(req: Request) {
  const body = await req.json();
  try {
    const countrysFlag = await prisma.countrysFlag.update({
      where: {
        number: parseInt(body.id as string),
      },
      data: {
        countryName: body.newCountryName,
        easyflagLink: body.newEasyUrl,
        hardflagLink: body.newHardUrl,
        number: parseInt(body.newID as string),
      },
    });

    return Response.json({
      message: `Data updated successfully!`,
      data: countrysFlag,
    });
  } catch (error) {
    throw error;
  }
}

export { GET, POST, PUT };
