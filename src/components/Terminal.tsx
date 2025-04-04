import React, { useState, useRef, useEffect } from 'react';
import { useTerminalHistory } from '../hooks/useTerminalHistory';
import { useCommandAutocomplete } from '../hooks/useCommandAutocomplete';
import { useCommandProcessor } from '../hooks/useCommandProcessor';
import { AVAILABLE_COMMANDS } from '../constants/commands';
import styles from '../styles/components/Terminal.module.css';

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const { commands, addCommand, clearHistory } = useTerminalHistory();
  const { suggestions, setCurrentInput, clearSuggestions } = useCommandAutocomplete(AVAILABLE_COMMANDS);
  const { processCommand } = useCommandProcessor();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setCurrentInput(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        processCommand(input);
        setInput('');
        clearSuggestions();
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    clearSuggestions();
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalTitle}>Terminal</div>
        <div className={styles.terminalControls}>
          <button onClick={clearHistory}>Limpar</button>
        </div>
      </div>
      <div className={styles.terminalContent} ref={terminalRef}>
        {commands.map((cmd) => (
          <div key={cmd.id} className={styles.command}>
            <div className={styles.commandInput}>
              <span className={styles.prompt}>&gt;</span>
              {cmd.text}
            </div>
            {cmd.output && (
              <div className={styles.commandOutput}>{cmd.output}</div>
            )}
          </div>
        ))}
        <div className={styles.inputLine}>
          <span className={styles.prompt}>&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={styles.input}
            placeholder="Digite um comando..."
          />
        </div>
        {suggestions.length > 0 && (
          <div className={styles.suggestions}>
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.name}
                className={styles.suggestion}
                onClick={() => handleSuggestionClick(suggestion.name)}
              >
                {suggestion.name} - {suggestion.description}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 