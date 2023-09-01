
const { Router } = require("express");

const UsersController = require("../controllers/Userscontroller")

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;



/*const { Router } = require("express")

const UsersController = require("../controllers/Userscontroller")

const usersRoutes = Router();

function myMiddleware(request, response, next) {
  console.log("Você passou pelo Middleware");

  if(request.body.isAdmin) {
    return response.json({message: "user unauthorized"});
  }
  

  next();
}


const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create)

module.exports = usersRoutes; */
