const moongose = require("mongoose");
const Schema = moongose.Schema;

const exployeeSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

module.exports = moongose.model("Employee", exployeeSchema);
