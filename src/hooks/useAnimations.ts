import { useState, useEffect, useCallback } from 'react';
import { ANIMATION_SETTINGS } from '../constants';

export interface AnimationState {
  isTyping: boolean;
  isGlitching: boolean;
  currentText: string;
}

export interface UseAnimationsReturn {
  animationState: AnimationState;
  startTypewriter: (text: string) => void;
  startGlitch: () => void;
  stopAnimations: () => void;
}

export const useAnimations = (): UseAnimationsReturn => {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isTyping: false,
    isGlitching: false,
    currentText: ''
  });

  const startTypewriter = useCallback((text: string) => {
    setAnimationState(prev => ({
      ...prev,
      isTyping: true,
      currentText: ''
    }));

    let currentIndex = 0;
    const interval = setInterval(() => {
      setAnimationState(prev => ({
        ...prev,
        currentText: text.slice(0, currentIndex + 1)
      }));

      currentIndex++;

      if (currentIndex >= text.length) {
        clearInterval(interval);
        setAnimationState(prev => ({
          ...prev,
          isTyping: false
        }));
      }
    }, ANIMATION_SETTINGS.typewriter.speed);
  }, []);

  const startGlitch = useCallback(() => {
    setAnimationState(prev => ({
      ...prev,
      isGlitching: true
    }));

    const glitchInterval = setInterval(() => {
      setAnimationState(prev => ({
        ...prev,
        currentText: prev.currentText
          .split('')
          .map(char => Math.random() > 0.5 ? char : String.fromCharCode(33 + Math.random() * 94))
          .join('')
      }));
    }, ANIMATION_SETTINGS.glitch.duration);

    setTimeout(() => {
      clearInterval(glitchInterval);
      setAnimationState(prev => ({
        ...prev,
        isGlitching: false
      }));
    }, ANIMATION_SETTINGS.glitch.duration * ANIMATION_SETTINGS.glitch.iterations);
  }, []);

  const stopAnimations = useCallback(() => {
    setAnimationState(prev => ({
      ...prev,
      isTyping: false,
      isGlitching: false
    }));
  }, []);

  return {
    animationState,
    startTypewriter,
    startGlitch,
    stopAnimations
  };
}; 