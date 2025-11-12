import { Router } from "express";
import {
  checkToken,
  loginByEmail,
  loginByPassword,
  register,
} from "../controllers/auth.controller";

const route = Router();

route.post("/register", register);
route.get("/check-token", checkToken);
route.post("/login-manual", loginByPassword);
route.post("/login-email", loginByEmail);

export default route;
