
import { Router } from "express";
import Controller from "../controllers/Controller.js";

const controller= new Controller()
const routes = Router();

routes.get("/", controller.getAllFrase)
routes.get("/:cantidad", controller.getPalabrasApi)
routes.post("/", controller.create)
routes.get("/id/:id", controller.getById);
routes.delete("/:id", controller.delete);


export default routes;
