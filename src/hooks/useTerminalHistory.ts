import { useState, useCallback } from 'react';

export interface Command {
  id: string;
  text: string;
  timestamp: Date;
  output?: string;
}

export interface UseTerminalHistoryReturn {
  commands: Command[];
  addCommand: (text: string, output?: string) => void;
  clearHistory: () => void;
  getLastCommand: () => Command | undefined;
  getCommandById: (id: string) => Command | undefined;
}

export const useTerminalHistory = (): UseTerminalHistoryReturn => {
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