import mongoose, { Schema, Model, Document } from "mongoose";

export interface ISkill extends Document {
  name: string;
  icon?: string;
}

const SkillSchema = new Schema<ISkill>(
  {
    name: {
      type: String,
      required: [true, "Please provide a skill name"],
      trim: true,
      maxlength: [50, "Skill name cannot be more than 50 characters"],
    },
    icon: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent model overwrite during hot reload in development
const Skill: Model<ISkill> =
  mongoose.models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);

export default Skill;
