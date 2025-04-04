import { useState, useEffect, useCallback } from 'react';
import { Theme } from '../types/common';
import { THEMES } from '../constants';

export interface UseThemeReturn {
  currentTheme: Theme;
  themes: Theme[];
  changeTheme: (themeName: string) => void;
  cycleThemes: () => void;
}

export const useTheme = (): UseThemeReturn => {
  const [themes] = useState<Theme[]>(THEMES);
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);

  const applyTheme = useCallback((theme: Theme) => {
    const root = document.documentElement;
    root.style.setProperty('--terminal-bg', theme.colors.background);
    root.style.setProperty('--terminal-text', theme.colors.text);
    root.style.setProperty('--terminal-accent', theme.colors.accent);
    root.style.setProperty('--terminal-dim', theme.colors.secondary);
    document.body.style.fontFamily = theme.font.family;
    document.body.style.fontSize = theme.font.size;
  }, []);

  const changeTheme = useCallback((themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      setCurrentTheme(theme);
      applyTheme(theme);
    }
  }, [themes, applyTheme]);

  const cycleThemes = useCallback(() => {
    const currentIndex = themes.findIndex(t => t.name === currentTheme.name);
    const nextIndex = (currentIndex + 1) % themes.length;
    changeTheme(themes[nextIndex].name);
  }, [themes, currentTheme.name, changeTheme]);

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme, applyTheme]);

  return {
    currentTheme,
    themes,
    changeTheme,
    cycleThemes
  };
}; 