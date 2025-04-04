import { useState, useCallback } from 'react';
import { Experience } from '../types/common';
import { EXPERIENCES } from '../constants';

export interface UseExperienceReturn {
  experiences: Experience[];
  selectedExperience: Experience | null;
  selectExperience: (index: number) => void;
  clearSelection: () => void;
  getTechnologies: () => string[];
}

export const useExperience = (): UseExperienceReturn => {
  const [experiences] = useState<Experience[]>(EXPERIENCES);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const selectExperience = useCallback((index: number) => {
    if (index >= 0 && index < experiences.length) {
      setSelectedExperience(experiences[index]);
    }
  }, [experiences]);

  const clearSelection = useCallback(() => {
    setSelectedExperience(null);
  }, []);

  const getTechnologies = useCallback(() => {
    const technologies = new Set<string>();
    experiences.forEach(exp => {
      exp.technologies.forEach(tech => technologies.add(tech));
    });
    return Array.from(technologies);
  }, [experiences]);

  return {
    experiences,
    selectedExperience,
    selectExperience,
    clearSelection,
    getTechnologies
  };
}; 