/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_id_fkey";

-- DropTable
DROP TABLE "Cart";

-- CreateTable
CREATE TABLE "Carrinho" (
    "id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "produtoId" INTEGER NOT NULL,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carrinho_produtoId_key" ON "Carrinho"("produtoId");

-- AddForeignKey
ALTER TABLE "Carrinho" ADD CONSTRAINT "Carrinho_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Anuncios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
