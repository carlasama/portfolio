import { useState, useCallback } from 'react';
import { CommandDefinition } from '../types/common';

export interface UseAutocompleteReturn {
  suggestions: CommandDefinition[];
  currentInput: string;
  setCurrentInput: (input: string) => void;
  getSuggestions: () => CommandDefinition[];
  clearSuggestions: () => void;
}

export const useAutocomplete = (
  availableCommands: CommandDefinition[]
): UseAutocompleteReturn => {
  const [suggestions, setSuggestions] = useState<CommandDefinition[]>([]);
  const [currentInput, setCurrentInput] = useState<string>('');

  const getSuggestions = useCallback(() => {
    if (!currentInput) {
      return [];
    }

    const input = currentInput.toLowerCase();
    return availableCommands.filter(cmd => {
      const matchesName = cmd.name.toLowerCase().includes(input);
      const matchesAlias = cmd.aliases?.some(alias => 
        alias.toLowerCase().includes(input)
      );
      return matchesName || matchesAlias;
    });
  }, [currentInput, availableCommands]);

  const updateSuggestions = useCallback(() => {
    const newSuggestions = getSuggestions();
    setSuggestions(newSuggestions);
  }, [getSuggestions]);

  const handleInputChange = useCallback((input: string) => {
    setCurrentInput(input);
    updateSuggestions();
  }, [updateSuggestions]);

  const clearSuggestions = useCallback(() => {
    setSuggestions([]);
  }, []);

  return {
    suggestions,
    currentInput,
    setCurrentInput: handleInputChange,
    getSuggestions,
    clearSuggestions
  };
}; 