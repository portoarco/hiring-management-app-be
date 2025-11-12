import { Request, Response } from "express";
import { createToken } from "../utils/createToken";
import { prisma } from "../configs/prisma";
import { transport } from "../configs/nodemailer";
import { regisMailTemplate } from "../templates/regis-template";
import { verify, JwtPayload } from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const email = req.body.data;
    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error("REGISTERED_USER");
    }

    const newUser = await prisma.users.create({
      data: {
        email: email,
      },
    });
    const token = createToken(newUser, "30m");
    const urlToFE = `${process.env.FRONTEND_URL}/auth-token/login/${token}`;

    await transport.sendMail({
      from: process.env.MAILSENDER,
      to: newUser.email,
      subject: "Akses Registrasi Akun",
      html: regisMailTemplate(newUser.email, urlToFE),
    });

    res.status(200).send("Register success!");
  } catch (error: any) {
    if (error.message === "REGISTERED_USER") {
      return res.status(400).send({ message: "REGISTERED_USER" });
    }
    console.log(error);
    res.status(500).send(error);
  }
};

export const checkToken = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new Error("TOKEN_NOT_FOUND");
    }
    const decoded = verify(
      token,
      process.env.TOKEN_KEY || "secret"
    ) as JwtPayload;

    const user = await prisma.users.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
    if (!user) {
      return res.status(404).send({ message: "USER_NOT_FOUND" });
    }

    res.locals.decrypt = decoded;
    res.locals.user = user;
    res.status(200).send({ message: "Token valid", token, role: user.role });
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).send({ message: "TOKEN_EXPIRED" });
    }
    console.log(error);
    res.status(500).send(error);
  }
};

export const loginByPassword = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.users.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).send("DATA_NOT_FOUND");
    }

    if (user.password !== password || user.email !== email) {
      return res.status(401).send("INVALID_EMAIL_PASS");
    }
    const token = createToken(user, "24h");

    res.status(200).send({ message: "Login Success!", user: user.role, token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const loginByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (!existingUser) return res.status(404).send("EMAIL_NOT_FOUND");
    const token = createToken(existingUser, "30m");
    const urlToFE = `${process.env.FRONTEND_URL}/auth-token/login/${token}`;

    await transport.sendMail({
      from: process.env.MAILSENDER,
      to: existingUser.email,
      subject: "Akses Masuk Akun",
      html: regisMailTemplate(existingUser.email, urlToFE),
    });

    res.status(200).send("Login via Email Success");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
