import { useState, useEffect } from 'react';
import { TerminalState } from '../types/common';

export interface UseMonitorReturn {
  monitorState: TerminalState;
  togglePower: () => void;
  adjustBrightness: (level: number) => void;
  toggleFlicker: () => void;
  toggleScanlines: () => void;
}

export const useMonitor = (): UseMonitorReturn => {
  const [monitorState, setMonitorState] = useState<TerminalState>({
    isOn: true,
    brightness: 1,
    flicker: false,
    scanlines: false
  });

  const togglePower = () => {
    setMonitorState(prev => ({
      ...prev,
      isOn: !prev.isOn
    }));
  };

  const adjustBrightness = (level: number) => {
    setMonitorState(prev => ({
      ...prev,
      brightness: Math.max(0, Math.min(1, level))
    }));
  };

  const toggleFlicker = () => {
    setMonitorState(prev => ({
      ...prev,
      flicker: !prev.flicker
    }));
  };

  const toggleScanlines = () => {
    setMonitorState(prev => ({
      ...prev,
      scanlines: !prev.scanlines
    }));
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'p':
          togglePower();
          break;
        case 'f':
          toggleFlicker();
          break;
        case 's':
          toggleScanlines();
          break;
        case 'arrowup':
          adjustBrightness(monitorState.brightness + 0.1);
          break;
        case 'arrowdown':
          adjustBrightness(monitorState.brightness - 0.1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [monitorState.brightness]);

  return {
    monitorState,
    togglePower,
    adjustBrightness,
    toggleFlicker,
    toggleScanlines
  };
}; 