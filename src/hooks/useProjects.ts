import { useState, useCallback } from 'react';
import { Project } from '../types/common';
import { PROJECTS } from '../constants';

export interface UseProjectsReturn {
  projects: Project[];
  filteredProjects: Project[];
  selectedProject: Project | null;
  filterProjects: (query: string) => void;
  selectProject: (projectId: string) => void;
  clearSelection: () => void;
}

export const useProjects = (): UseProjectsReturn => {
  const [projects] = useState<Project[]>(PROJECTS);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterProjects = useCallback((query: string) => {
    if (!query.trim()) {
      setFilteredProjects(projects);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = projects.filter(project => {
      const matchesTitle = project.title.toLowerCase().includes(searchQuery);
      const matchesDescription = project.description.toLowerCase().includes(searchQuery);
      const matchesTechnologies = project.technologies.some(tech =>
        tech.toLowerCase().includes(searchQuery)
      );

      return matchesTitle || matchesDescription || matchesTechnologies;
    });

    setFilteredProjects(filtered);
  }, [projects]);

  const selectProject = useCallback((projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
    }
  }, [projects]);

  const clearSelection = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return {
    projects,
    filteredProjects,
    selectedProject,
    filterProjects,
    selectProject,
    clearSelection
  };
}; 