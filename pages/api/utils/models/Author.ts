import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
});

export default mongoose.models.Author || mongoose.model("Author", AuthorSchema);