import mongoose from "mongoose";

const Schema = mongoose.Schema //class

//! Define the basic schema for the Skills Model -> ({}) is called a path
const skillSchema = new Schema({
  skillName: String, //String is capitalized bc its a builtin schemaTypes
  required: Boolean,
  // don't need to add in id bc Schema automatically generates it
})

//! Model
const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}
