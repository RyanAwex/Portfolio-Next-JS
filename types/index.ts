import { ReactNode } from "react";

export interface Skill {
  name: string;
  icon: ReactNode;
  category: string;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  image: string;
}
