import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

  
export const  createUser = async (req, res) => {
    try{
    
    const {email, name, username, password} = req.body
    
    let user = await prisma.user.findUnique({where: {email}});
            
    if(user) {
        return res.json({error: "já existe um usuário cadastrado com esse email ou username"})
    }
    
        user = await prisma.user.create({
        data: {
            name,
            username,
            email,
            password
        }
    });
    
    return res.json(user)
    }catch (error) {
        return res.json({error});
    }
}

export const findAllUsers = async (req,res) =>{
    try {
        const users = await prisma.user.findMany();
        return res.json(users);
    }
    catch (error) {
        return res.json({error});
    }
}

export const findUser = async (req, res) => {
    try{
        const {id} = req.params;

        const user = await prisma.user.findUnique({ where: {id: Number(id)}});

        if(!user) return res.json({error: "Não foi possivel encontrar esse usuário"});

        return res.json(user);

    }catch (error) {
        return res.json({error});
    }
}

export const updateUser = async (req, res) => {
    try{
        const {id} = req.params;
        const {email, name} = req.body;

        let user = await prisma.user.findUnique({where: {id: Number(id)}});

        if(!user) return res.json({error: "Não foi possivel encontrar esse usuário"});

        user = await prisma.user.update({where: {id: Number(id)}, data: {email, name}});
        return res.json(user);
    }
    catch (error) {
        res.json({error});
    }
}

export const deleteUser = async (req, res) => {
    try{
        const {id} = req.params;

        const user = await prisma.user.findUnique({ where: {id: Number(id)}});

        if(!user) return res.json({error: "Não foi possivel encontrar esse usuário"});

        await prisma.user.delete({where: {id: Number(id)}});

        return res.json({message: "Usuário deletado"});

    }catch (error) {
        return res.json({error});
    }
}

