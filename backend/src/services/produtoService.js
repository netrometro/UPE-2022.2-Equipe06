import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProduct = async (req,res) => {

    const {name, description, price, imagemUrl, type } = req.body;

    try {
    const post = await prisma.anuncios.create({
        data: {
            name,
            description,
            price,
            imagemUrl,
            type
        }})
        return res.json(post);
    }catch (error){
        return res.json({message: error.message});
    }
    
}

export const findAllProducts = async (res) => {
    try {
        const produtos = await prisma.anuncios.findMany();
        return res.json(produtos);

    } 
    catch (error) {
        return res.json({error});
    }
      
}

export const  findProduct = async (req, res) => {
    try{
        const {id} = req.params;

        const produto = await prisma.anuncios.findUnique({ where: {id: Number(id)}});

        if(!produto) return res.json({error: "Não foi possivel encontrar esse produto"});

        return res.json(produto);

    }catch (error) {
        return res.json({error});
    }
    
}

export const updateProduct = async (req,res) => {
    const { id } = req.params;
    const { name, description, price, imagemUrl, type} = req.body;

    try {
        const product = await prisma.anuncios.findUnique({ where: { id: Number(id) } });
      
        if (!product) {
            return res.json({ message: "Produto inexistente" });
        }
        await prisma.anuncios.update({
            where: { id: Number(id) },
            data: {
                name,
                description,
                price,
                imagemUrl,
                type
            }});
        
            return res.json({ message: "Produto Atualizado!"})
        } catch (error) {
            return res.json({ message: error.message });
    }
    
}

export const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;

        const produto = await prisma.anuncios.findUnique({ where: {id: Number(id)}});

        if(!produto) return res.json({error: "Não foi possivel encontrar esse produto"});

        await prisma.anuncios.delete({where: {id: Number(id)}});

        return res.json({message: "Produto deletado"});

    }catch (error) {
        return res.json({error});
    }
}

