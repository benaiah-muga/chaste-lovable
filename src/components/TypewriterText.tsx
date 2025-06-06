
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
  loop?: boolean;
  pauseDuration?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  texts, 
  speed = 100, 
  delay = 0,
  className = "",
  loop = false,
  pauseDuration = 2000
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[currentTextIndex] || '';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (!isDeleting && currentIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isDeleting && currentIndex === currentText.length && loop) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);

      return () => clearTimeout(timer);
    } else if (isDeleting && currentIndex > 0) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, speed / 2);

      return () => clearTimeout(timer);
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    }
  }, [currentIndex, currentText, speed, isTyping, isDeleting, loop, pauseDuration, texts.length]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && (
        <span className="animate-pulse text-neon-blue">|</span>
      )}
    </span>
  );
};

export default TypewriterText;
