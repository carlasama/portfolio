import { useState, useCallback } from 'react';

export type Page = 'home' | 'about' | 'projects' | 'contact';

export interface UseNavigationReturn {
  currentPage: Page;
  navigateTo: (page: Page) => void;
  goBack: () => void;
  history: Page[];
}

export const useNavigation = (initialPage: Page = 'home'): UseNavigationReturn => {
  const [currentPage, setCurrentPage] = useState<Page>(initialPage);
  const [history, setHistory] = useState<Page[]>([initialPage]);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    setHistory(prev => [...prev, page]);
  }, []);

  const goBack = useCallback(() => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const previousPage = newHistory[newHistory.length - 1];
      setCurrentPage(previousPage);
      setHistory(newHistory);
    }
  }, [history]);

  return {
    currentPage,
    navigateTo,
    goBack,
    history
  };
}; 