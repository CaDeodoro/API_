const { Router } = require("express");

const usersRouter = require("./users.routes");

const routes = Router();

routes.use("/users", usersRouter);

module.exports = routes;


//const { Router } = require("express");

//const usersRoutes = require("./users.routes")

//const routes = Router();
//routes.use("./users", usersRoutes);

//module.exports = routes;