const express = require("express");
const BookModel = require("./models").book;
const AuthorModel = require("./models").author;
const BookAuthorModel = require("./models").bookAuthor;
const app = express();
const PORT = 3000;

app.get("/books", (req, res) => {
  BookModel.findAll({
    include: {
      model: AuthorModel,
      attributes: { exclude: ["id"] },
    },
    // attributes: { exclude: ["id", "postId"] },
  })
    .then((data) => {
      res.status(200).json({
        status: 1,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        msg: "there is something error",
        err: err,
      });
    });
});

app.get("/authors", (req, res) => {
  AuthorModel.findAll({
    include: {
      model: BookModel,
      attributes: { exclude: ["id"] },
    },
  })
    .then((data) => {
      res.status(200).json({
        status: 1,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        msg: "there is something error",
        err: err,
      });
    });
});
app.get("/bookauthors", (req, res) => {
  BookAuthorModel.findAll({
    include: [{ all: true, attributes: { exclude: ["id"] } }],
  })
    .then((data) => {
      res.status(200).json({
        status: 1,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        msg: "there is something error",
        err: err,
      });
    });
});

app.listen(PORT, () => {
  console.log("Sever running at 3000");
});
