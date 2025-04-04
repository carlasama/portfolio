import { CommandDefinition } from '../hooks/useCommandAutocomplete';

export const AVAILABLE_COMMANDS: CommandDefinition[] = [
  {
    name: 'help',
    description: 'Mostra todos os comandos disponíveis',
    aliases: ['h', '?'],
    usage: 'help [comando]'
  },
  {
    name: 'clear',
    description: 'Limpa o histórico do terminal',
    aliases: ['cls', 'c'],
    usage: 'clear'
  },
  {
    name: 'theme',
    description: 'Muda o tema do terminal',
    aliases: ['t'],
    usage: 'theme [nome]'
  },
  {
    name: 'about',
    description: 'Mostra informações sobre mim',
    aliases: ['a', 'info'],
    usage: 'about'
  },
  {
    name: 'projects',
    description: 'Lista meus projetos',
    aliases: ['p', 'proj'],
    usage: 'projects'
  },
  {
    name: 'contact',
    description: 'Mostra informações de contato',
    aliases: ['c', 'cont'],
    usage: 'contact'
  },
  {
    name: 'exit',
    description: 'Fecha o terminal',
    aliases: ['quit', 'q'],
    usage: 'exit'
  }
]; 