const express = require("express");

const app = express();

app.use(express.json());

const validateMovie = require("./middlewares/validateMovie");

app.post("/api/movies", validateMovie, movieControllers.postMovie);

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");
const validateMovie = require("./middlewares/validateMovie");
const validateUser = require("./middlewares/validateUser");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);

app.post("/api/movies", movieControllers.postMovie);
app.post("/api/users", userControllers.postUser);

app.put("/api/movies", movieControllers.postMovie);
app.put("/api/users", userControllers.postUser);

app.delete("/api/movies/:id", movieControllers.deleteMovie);
app.delete("/api/users/:id", userControllers.deleteUser);

app.post("api/movies", validateMovie, movieControllers.postMovie);
app.put("api/movies", validateMovie, movieControllers.updateMovie);

app.post("/api/users/", validateUser, userControllers.postUser);
app.put("/api/users/", validateUser, userControllers.updateUser);

module.exports = app;
