import React from 'react';

function FloatingParagraph({ text }) {
  return (
    <p className="text-left text-gray-300 leading-relaxed font-futuristic">
      {text.split('').map((char, index) => (
        <span key={index} className="floating-letter" style={{ animationDelay: `${index * 0.05}s` }}>
          {char}
        </span>
      ))}
    </p>
  );
}

export default FloatingParagraph;
