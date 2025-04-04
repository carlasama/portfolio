import { useState, useEffect } from 'react';

export interface TerminalTheme {
  bg: string;
  text: string;
  accent: string;
  dim: string;
  font: string;
  cursor: string;
}

export interface ThemePreset {
  name: string;
  theme: TerminalTheme;
}

export const defaultTheme: TerminalTheme = {
  bg: '#000000',
  text: '#00ff00',
  accent: '#00ff00',
  dim: 'rgba(0, 255, 0, 0.5)',
  font: 'VT323',
  cursor: '_'
};

export const themePresets: ThemePreset[] = [
  {
    name: 'Classic',
    theme: defaultTheme
  },
  {
    name: 'Matrix',
    theme: {
      bg: '#000000',
      text: '#00ff00',
      accent: '#00ff00',
      dim: 'rgba(0, 255, 0, 0.5)',
      font: 'VT323',
      cursor: '█'
    }
  },
  {
    name: 'Amber',
    theme: {
      bg: '#000000',
      text: '#ffb000',
      accent: '#ffb000',
      dim: 'rgba(255, 176, 0, 0.5)',
      font: 'VT323',
      cursor: '█'
    }
  },
  {
    name: 'White',
    theme: {
      bg: '#000000',
      text: '#ffffff',
      accent: '#ffffff',
      dim: 'rgba(255, 255, 255, 0.5)',
      font: 'VT323',
      cursor: '█'
    }
  }
];

export const useTerminalTheme = (initialTheme: TerminalTheme = defaultTheme) => {
  const [theme, setTheme] = useState<TerminalTheme>(initialTheme);
  const [currentPreset, setCurrentPreset] = useState<string>('Classic');

  const applyTheme = (newTheme: TerminalTheme) => {
    const root = document.documentElement;
    root.style.setProperty('--terminal-bg', newTheme.bg);
    root.style.setProperty('--terminal-text', newTheme.text);
    root.style.setProperty('--terminal-accent', newTheme.accent);
    root.style.setProperty('--terminal-dim', newTheme.dim);
    document.body.style.fontFamily = newTheme.font;
  };

  const changeTheme = (presetName: string) => {
    const preset = themePresets.find(p => p.name === presetName);
    if (preset) {
      setTheme(preset.theme);
      setCurrentPreset(presetName);
      applyTheme(preset.theme);
    }
  };

  const cycleThemes = () => {
    const currentIndex = themePresets.findIndex(p => p.name === currentPreset);
    const nextIndex = (currentIndex + 1) % themePresets.length;
    changeTheme(themePresets[nextIndex].name);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return {
    theme,
    currentPreset,
    changeTheme,
    cycleThemes,
    themePresets
  };
}; 