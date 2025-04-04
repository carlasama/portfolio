export const sleep = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

export interface TypewriterOptions {
  speed?: number;
  initialDelay?: number;
  cursor?: string;
}

export const typewriter = async (
  element: HTMLElement,
  text: string,
  options: TypewriterOptions = {}
): Promise<void> => {
  const {
    speed = 100,
    initialDelay = 0,
    cursor = '_'
  } = options;

  if (initialDelay > 0) {
    await sleep(initialDelay);
  }

  element.textContent = '';
  const cursorElement = document.createElement('span');
  cursorElement.className = 'cursor';
  cursorElement.textContent = cursor;
  element.appendChild(cursorElement);

  for (let i = 0; i < text.length; i++) {
    await sleep(speed);
    const char = text[i];
    const charElement = document.createElement('span');
    charElement.textContent = char;
    element.insertBefore(charElement, cursorElement);
  }
};

export interface GlitchOptions {
  intensity?: number;
  duration?: number;
  frequency?: number;
}

export const glitchEffect = async (
  element: HTMLElement,
  options: GlitchOptions = {}
): Promise<void> => {
  const {
    intensity = 0.1,
    duration = 2000,
    frequency = 100
  } = options;

  const originalText = element.textContent || '';
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const startTime = Date.now();

  while (Date.now() - startTime < duration) {
    if (Math.random() < intensity) {
      const pos = Math.floor(Math.random() * originalText.length);
      const char = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      element.textContent = 
        originalText.substring(0, pos) +
        char +
        originalText.substring(pos + 1);
    }
    await sleep(frequency);
  }

  element.textContent = originalText;
}; 