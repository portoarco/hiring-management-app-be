import { Request, Response } from "express";
import { prisma } from "../configs/prisma";
import { JwtPayload, verify } from "jsonwebtoken";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    res.status(200).send("Success!");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getUserData = async (req: Request, res: Response) => {
  try {
    const token = req.body.data.token;

    const decoded = verify(
      token,
      process.env.TOKEN_KEY || "secret"
    ) as JwtPayload;

    const user = await prisma.users.findUnique({
      where: { id: decoded.id },
      include: {
        company: true,
      },
      omit: {
        password: true,
        date_of_birth: true,
      },
    });
    if (!user) {
      return res.status(404).send({ message: "USER_NOT_FOUND" });
    }

    res.status(200).send({ message: "Get User Data Success!", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
