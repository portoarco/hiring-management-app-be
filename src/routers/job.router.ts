import { Router } from "express";
import { getAllUser } from "../controllers/user.controller";

const route = Router();

route.get("/all", getAllUser);

export default route;
