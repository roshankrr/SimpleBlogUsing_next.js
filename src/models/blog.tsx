import mongoose, { Document, Model, Schema } from 'mongoose';

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
});

interface BlogDoc extends Document {
  title: string;
  description: string;
}

// Ensuring model creation only if it does not exist
const Blog: Model<BlogDoc> = mongoose.models.Blog || mongoose.model<BlogDoc>('Blog', blogSchema);

export default Blog;