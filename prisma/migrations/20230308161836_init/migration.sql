-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "valor" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemPedido" (
    "id" SERIAL NOT NULL,
    "id_pedido" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "qtde" INTEGER NOT NULL,
    "valor_total" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ItemPedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "descricao" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "qtde" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
