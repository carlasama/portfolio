export interface Technology {
  name: string;
  icon?: string;
  color?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  startDate: string;
  endDate?: string;
}

export interface ProjectCardProps {
  project: Project;
  onBack?: () => void;
}

export interface ProjectsProps {
  onBack: () => void;
} 