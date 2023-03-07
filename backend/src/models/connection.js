const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  //escrever aqui as querys do db
  const allUsers = await prisma.Anuncio.findMany()
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })