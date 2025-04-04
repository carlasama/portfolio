import { Skill, Experience, Education, Project, Theme } from '../types/common';

export const SKILLS: Skill[] = [
  {
    name: 'React',
    level: 90,
    category: 'frontend',
    icon: 'react'
  },
  {
    name: 'TypeScript',
    level: 85,
    category: 'languages',
    icon: 'typescript'
  },
  {
    name: 'Node.js',
    level: 80,
    category: 'backend',
    icon: 'nodejs'
  },
  {
    name: 'Git',
    level: 85,
    category: 'tools',
    icon: 'git'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Empresa X',
    role: 'Desenvolvedor Frontend',
    startDate: '2020-01',
    endDate: '2022-12',
    description: 'Desenvolvimento de aplicações web com React e TypeScript',
    technologies: ['React', 'TypeScript', 'Node.js']
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Universidade Y',
    course: 'Ciência da Computação',
    startDate: '2016-01',
    endDate: '2019-12',
    description: 'Graduação em Ciência da Computação'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Portfólio',
    description: 'Meu portfólio pessoal desenvolvido com React e TypeScript',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/seu-usuario/portfolio'
  }
];

export const THEMES: Theme[] = [
  {
    name: 'Classic',
    colors: {
      primary: '#00ff00',
      secondary: '#00cc00',
      background: '#000000',
      text: '#00ff00',
      accent: '#00ff00'
    },
    font: {
      family: 'VT323',
      size: '16px'
    }
  },
  {
    name: 'Matrix',
    colors: {
      primary: '#00ff00',
      secondary: '#00cc00',
      background: '#000000',
      text: '#00ff00',
      accent: '#00ff00'
    },
    font: {
      family: 'VT323',
      size: '16px'
    }
  },
  {
    name: 'Amber',
    colors: {
      primary: '#ffb000',
      secondary: '#cc8c00',
      background: '#000000',
      text: '#ffb000',
      accent: '#ffb000'
    },
    font: {
      family: 'VT323',
      size: '16px'
    }
  }
];

export const ANIMATION_SETTINGS = {
  typewriter: {
    speed: 50,
    delay: 1000
  },
  glitch: {
    duration: 200,
    iterations: 3
  }
}; 