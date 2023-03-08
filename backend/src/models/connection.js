const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  //escrever aqui as querys do db

  // await prisma.produto.create({
  //   data: {
  //     nome: 'Caderno',
  //     descricao: 'Um simples caderno.',
  //     preco: 10.5,
  //     qtde: 15,
  //   },
  // })

  // await prisma.usuario.create({
  //   data: {
  //     nome: 'Usuário 1',
  //     email: 'usuario1@gmail.com',
  //   },
  // })

  // await prisma.pedido.create({
  //   data: {
  //     id_usuario: 1,
  //     valor: 21,
  //   },
  // })

  // await prisma.itemPedido.create({
  //   data: {
  //     id_pedido: 1,
  //     id_produto: 1,
  //     valor_total: 21,
  //     qtde: 2,
  //   },
  // })

  // await prisma.produto.create({
  //   data: {
  //     nome: 'Caneta',
  //     descricao: 'Uma simples caneta.',
  //     preco: 1,
  //     qtde: 15,
  //   },
  // })

  // await prisma.itemPedido.create({
  //   data: {
  //     id_pedido: 1,
  //     id_produto: 2,
  //     valor_total: 5,
  //     qtde: 5,
  //   },
  // })

  // await prisma.usuario.create({
  //   data: {
  //     nome: 'Usuário 2',
  //     email: 'usuario2@gmail.com',
  //   },
  // })

  // //pedido id 2
  // await prisma.pedido.create({
  //   data: {
  //     id_usuario: 2,
  //     valor: 21,
  //   },
  // })

  // await prisma.itemPedido.create({
  //   data: {
  //     id_pedido: 2,
  //     id_produto: 1,
  //     valor_total: 21,
  //     qtde: 2,
  //   },
  // })

  // //pedido id 3
  // await prisma.pedido.create({
  //   data: {
  //     id_usuario: 1,
  //     valor: 21,
  //   },
  // })

  // await prisma.itemPedido.create({
  //   data: {
  //     id_pedido: 3,
  //     id_produto: 1,
  //     valor_total: 21,
  //     qtde: 2,
  //   },
  // })

  console.log('Pedidos do cliente de id 1 (Usuário 1):')

  const pedidos1 = await prisma.pedido.findMany({
    where: {
      id_usuario: 1,
    },
  })

  console.log(pedidos1)

  console.log('Pedidos do cliente de id 2 (Usuário 2):')

  const pedidos2 = await prisma.pedido.findMany({
    where: {
      id_usuario: 2,
    },
  })

  console.log(pedidos2)
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