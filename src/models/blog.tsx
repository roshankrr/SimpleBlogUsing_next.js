import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
});

interface Blogdoc{
  title:string;
  discription:string;
}

const Blog= mongoose.model.Blog  || mongoose.model("Blog",blogSchema);

export default Blog;