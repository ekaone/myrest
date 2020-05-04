const express = require("express");
const cors = require("cors");
const app = express();

// Routes
const rootRoutes = require("./api/routes/root");
const fakerRoutes = require("./api/routes/faker");
const jsonPosts = require("./api/routes/posts");
const jsonAlbums = require("./api/routes/albums");
const jsonTodos = require("./api/routes/todos");
const jsonUsers = require("./api/routes/users");
const jsonQuotes = require("./api/routes/quotes");

// Cross Origin
app.use(cors());

// Routes Handle Requests
app.use("/", rootRoutes);
app.use("/faker", fakerRoutes);
app.use("/posts", jsonPosts);
app.use("/albums", jsonAlbums);
app.use("/todos", jsonTodos);
app.use("/users", jsonUsers);
app.use("/quotes", jsonQuotes);

// Handle Error Routes
app.use((req, res, next) => {
  const error = new Error("Not routes found...!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const port = 5001;
app.listen(port, () => console.log(`App listening on port ${port}!`));
