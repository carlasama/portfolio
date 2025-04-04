import { useState, useCallback } from 'react';
import { Skill } from '../types/common';
import { SKILLS } from '../constants';

export interface UseSkillsReturn {
  skills: Skill[];
  filteredSkills: Skill[];
  selectedCategory: string | null;
  filterByCategory: (category: string | null) => void;
  getCategories: () => string[];
}

export const useSkills = (): UseSkillsReturn => {
  const [skills] = useState<Skill[]>(SKILLS);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(SKILLS);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filterByCategory = useCallback((category: string | null) => {
    setSelectedCategory(category);
    if (!category) {
      setFilteredSkills(skills);
      return;
    }

    const filtered = skills.filter(skill => skill.category === category);
    setFilteredSkills(filtered);
  }, [skills]);

  const getCategories = useCallback(() => {
    const categories = new Set(skills.map(skill => skill.category));
    return Array.from(categories);
  }, [skills]);

  return {
    skills,
    filteredSkills,
    selectedCategory,
    filterByCategory,
    getCategories
  };
}; 