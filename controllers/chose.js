const Todo = require("../models/Chose");
module.exports = {
  getIndex: (req, res) => {
    res.render("chose.ejs");
  },

  createDG: async (req, res) => {
    try {
      await Todo.create({
        CatDog: req.body.choose,
        userId: req.user.id,
      });
      console.log("You have chosen!");
      
      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },
};
