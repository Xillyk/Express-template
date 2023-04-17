import moongose from "mongoose";
const Schema = moongose.Schema;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

export default moongose.model("Employee", employeeSchema);
