import { useCallback } from 'react';
import { AVAILABLE_COMMANDS } from '../constants/commands';
import { useTerminalHistory } from './useTerminalHistory';
import { useTerminalTheme } from './useTerminalTheme';

export interface CommandProcessor {
  processCommand: (input: string) => void;
}

export const useCommandProcessor = (): CommandProcessor => {
  const { addCommand } = useTerminalHistory();
  const { changeTheme, themePresets } = useTerminalTheme();

  const processCommand = useCallback((input: string) => {
    const [command, ...args] = input.trim().split(' ');
    const cmd = AVAILABLE_COMMANDS.find(
      c => c.name === command || c.aliases?.includes(command)
    );

    if (!cmd) {
      addCommand(input, `Comando não encontrado: ${command}`);
      return;
    }

    switch (cmd.name) {
      case 'help':
        if (args.length > 0) {
          const helpCmd = AVAILABLE_COMMANDS.find(
            c => c.name === args[0] || c.aliases?.includes(args[0])
          );
          if (helpCmd) {
            addCommand(
              input,
              `${helpCmd.name} - ${helpCmd.description}\nUso: ${helpCmd.usage}`
            );
          } else {
            addCommand(input, `Comando não encontrado: ${args[0]}`);
          }
        } else {
          const helpText = AVAILABLE_COMMANDS
            .map(c => `${c.name} - ${c.description}`)
            .join('\n');
          addCommand(input, helpText);
        }
        break;

      case 'clear':
        addCommand(input, '');
        break;

      case 'theme':
        if (args.length > 0) {
          const themeName = args[0];
          const themeExists = themePresets.some(p => p.name === themeName);
          if (themeExists) {
            changeTheme(themeName);
            addCommand(input, `Tema alterado para: ${themeName}`);
          } else {
            addCommand(input, `Tema não encontrado: ${themeName}`);
          }
        } else {
          const themesList = themePresets.map(p => p.name).join(', ');
          addCommand(input, `Temas disponíveis: ${themesList}`);
        }
        break;

      case 'about':
        addCommand(input, 'Redirecionando para a página Sobre...');
        // Implementar navegação para a página About
        break;

      case 'projects':
        addCommand(input, 'Redirecionando para a página Projetos...');
        // Implementar navegação para a página Projects
        break;

      case 'contact':
        addCommand(input, 'Redirecionando para a página Contato...');
        // Implementar navegação para a página Contact
        break;

      case 'exit':
        addCommand(input, 'Encerrando terminal...');
        // Implementar lógica de encerramento
        break;

      default:
        addCommand(input, `Comando não implementado: ${cmd.name}`);
    }
  }, [addCommand, changeTheme, themePresets]);

  return { processCommand };
}; 