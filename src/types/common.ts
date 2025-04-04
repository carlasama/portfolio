export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  course: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  font: {
    family: string;
    size: string;
  };
}

export interface TerminalState {
  isOn: boolean;
  brightness: number;
  flicker: boolean;
  scanlines: boolean;
}

export interface Command {
  id: string;
  text: string;
  timestamp: Date;
  output?: string;
}

export interface CommandDefinition {
  name: string;
  description: string;
  aliases?: string[];
  usage?: string;
} 