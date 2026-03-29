import mongoose, { Schema, Model, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, "Please provide a project title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a project description"],
    },
    image: {
      type: String,
      required: [true, "Please provide a project image URL"],
    },
    tech: {
      type: [String],
      required: [true, "Please provide at least one technology"],
    },
    github: {
      type: String,
      trim: true,
    },
    demo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// Create indexes for better query performance
ProjectSchema.index({ createdAt: -1 });

// Prevent model overwrite during hot reload in development
const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
