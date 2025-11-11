import { Request, Response } from "express";

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
