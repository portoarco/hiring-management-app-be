import { Router } from "express";
import { getAllUser, getUserData } from "../controllers/user.controller";

const route = Router();

route.post("/data", getUserData);
route.get("/all", getAllUser);

export default route;
