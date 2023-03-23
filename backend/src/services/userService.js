import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'chave-secreta';

export const createUser = async (req, res) => {
  try {
    const { name, username, email, password} = req.body;
   
    const hashedPassword = await bcrypt.hash(password, 6);

    let user = await prisma.user.findUnique({ where: {email} });

    if (user) {
      return res.json({ error: "Já existe usuário cadastrado com esses dados" });
    }

    user = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      { userId: user.userId },
      SECRET_KEY
    );


    return res.json({user,token});   
  } catch (error) {
    return res.json({ error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.json({ error: "usuário não encontrado" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      return res.json({ error: "senha incorreta" });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY); 
    return res.json({ result: passwordCompare, token, email: email, userId: user.id});
  } catch (error) {
    return res.json({ error: "Usuário não encontrado" });
  }
};

  

export const findAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.json(users);
  } catch (error) {
    return res.json({ error });
  }
};

export const findUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({ where: { id: Number(id) } });

    if (!user)
      return res.json({ error: "Não foi possivel encontrar esse usuário" });

    return res.json(user);
  } catch (error) {
    return res.json({ error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name } = req.body;

    let user = await prisma.user.findUnique({ where: { id: Number(id) } });

    if (!user)
      return res.json({ error: "Não foi possivel encontrar esse usuário" });

    user = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, name },
    });
    return res.json(user);
  } catch (error) {
    res.json({ error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({ where: { id: Number(id) } });

    if (!user)
      return res.json({ error: "Não foi possivel encontrar esse usuário" });

    await prisma.user.delete({ where: { id: Number(id) } });

    return res.json({ message: "Usuário deletado" });
  } catch (error) {
    return res.json({ error });
  }
};
