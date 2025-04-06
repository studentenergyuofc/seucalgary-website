import { IconType } from "react-icons";

export interface Image {
  src: string;
  altimagesizes: string;
  blurhash: string;
}

export interface TeamMember {
  name: string;
  role?: string;
  description: string;
  major: string;
  image: Image;
}

export interface BudgetItem {
  name: string;
  amount: string;
  icon: IconType;
}

export interface GuidedProject {
  title: string;
  description: string;
  team: TeamMember[];
  project_outlook_link: string;
  images: string[];
  budget_breakdown: BudgetItem[];
  total_budget_statement: string;
}
