import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const carrinhoGetAll = async (req, res) => {
  try {
    const carrinho = await prisma.carrinho.findMany({
        include: {
          produto: true,
        },
      })
      res.json(carrinho)
    return res.json(post);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const carrinhoPost = async (req, res) => {
    const { produtoId, quantidade } = req.body
  const produto = await prisma.anuncios.findUnique({
    where: {
      id: produtoId,
    },
  })
  if (!produto) {
    return res.status(404).json({ error: 'Produto não encontrado' })
  }
  const subtotal = produto.price * quantidade
  const carrinho = await prisma.carrinho.create({
    data: {
      produto: {
        connect: {
          id: produto.id,
        },
      },
      quantidade,
      subtotal,
    },
    include: {
      produto: true,
    },
  })
  res.json(carrinho)
}

export const carrinhoUpdate = async (req, res) => {
    const { id } = req.params
    const { quantidade } = req.body
    const carrinho = await prisma.carrinho.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        produto: true,
      },
    })
    if (!carrinho) {
      return res.status(404).json({ error: 'Carrinho não encontrado' })
    }
    const subtotal = carrinho.produto.price * quantidade
    const updatedCarrinho = await prisma.carrinho.update({
      where: {
        id: parseInt(id),
      },
      data: {
        quantidade,
        subtotal,
      },
      include: {
        produto: true,
      },
    })
    res.json(updatedCarrinho)
};



export const carrinhoDelete = async (req, res) => {
    const { id } = req.params
    const carrinho = await prisma.carrinho.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    if (!carrinho) {
      return res.status(404).json({ error: 'Carrinho não encontrado' })
    }
    await prisma.carrinho.delete({
      where: {
        id: parseInt(id),
      },
    })
    res.json({ message: 'Carrinho excluído com sucesso' })
};

