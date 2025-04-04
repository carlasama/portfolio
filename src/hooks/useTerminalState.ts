import { useState, useCallback } from 'react';
import { Command } from '../types/common';

export interface UseTerminalStateReturn {
  commands: Command[];
  addCommand: (text: string, output?: string) => void;
  clearHistory: () => void;
  getLastCommand: () => Command | undefined;
  getCommandById: (id: string) => Command | undefined;
}

export const useTerminalState = (): UseTerminalStateReturn => {
  const [commands, setCommands] = useState<Command[]>([]);

  const addCommand = useCallback((text: string, output?: string) => {
    const newCommand: Command = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
      output
    };

    setCommands(prev => [...prev, newCommand]);
  }, []);

  const clearHistory = useCallback(() => {
    setCommands([]);
  }, []);

  const getLastCommand = useCallback(() => {
    return commands[commands.length - 1];
  }, [commands]);

  const getCommandById = useCallback((id: string) => {
    return commands.find(cmd => cmd.id === id);
  }, [commands]);

  return {
    commands,
    addCommand,
    clearHistory,
    getLastCommand,
    getCommandById
  };
}; 