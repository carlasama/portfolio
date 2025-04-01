import React from 'react';

interface AsciiArtProps {
  art: string;
  className?: string;
}

const AsciiArt: React.FC<AsciiArtProps> = ({ art, className = '' }) => {
  return (
    <pre className={`ascii-art ${className}`}>
      {art}
    </pre>
  );
};

export default AsciiArt; 