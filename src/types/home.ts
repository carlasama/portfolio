export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  icon?: string;
}

export interface Education {
  institution: string;
  course: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone?: string;
  socialLinks: SocialLink[];
  skills: Skill[];
  education: Education[];
  experience: Experience[];
}

export interface HomeProps {
  onNavigate: (page: string) => void;
} 