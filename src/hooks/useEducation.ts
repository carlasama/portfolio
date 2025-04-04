import { useState, useCallback } from 'react';
import { Education } from '../types/common';
import { EDUCATION } from '../constants';

export interface UseEducationReturn {
  education: Education[];
  selectedEducation: Education | null;
  selectEducation: (index: number) => void;
  clearSelection: () => void;
  getInstitutions: () => string[];
}

export const useEducation = (): UseEducationReturn => {
  const [education] = useState<Education[]>(EDUCATION);
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null);

  const selectEducation = useCallback((index: number) => {
    if (index >= 0 && index < education.length) {
      setSelectedEducation(education[index]);
    }
  }, [education]);

  const clearSelection = useCallback(() => {
    setSelectedEducation(null);
  }, []);

  const getInstitutions = useCallback(() => {
    return education.map(edu => edu.institution);
  }, [education]);

  return {
    education,
    selectedEducation,
    selectEducation,
    clearSelection,
    getInstitutions
  };
}; 