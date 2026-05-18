import React from 'react';

/**
 * Reusable garden decorations (floating plants, sparkles, etc.)
 * to be used in various views for consistent "Kebun Kita" theme.
 */
export const GardenDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sparkles */}
      <div className="sparkle-dot" style={{ top: '12%', left: '8%', background: '#fde68a', animationDelay: '0s' }}></div>
      <div className="sparkle-dot" style={{ top: '20%', left: '85%', background: '#86efac', animationDelay: '0.7s' }}></div>
      <div className="sparkle-dot" style={{ top: '60%', left: '12%', background: '#fde68a', animationDelay: '1.4s' }}></div>
      <div className="sparkle-dot" style={{ top: '75%', left: '90%', background: '#86efac', animationDelay: '0.3s' }}></div>
      <div className="sparkle-dot" style={{ top: '40%', left: '92%', background: '#fde68a', animationDelay: '1.8s' }}></div>
      <div className="sparkle-dot" style={{ top: '85%', left: '50%', background: '#86efac', animationDelay: '1.1s' }}></div>
    </div>
  );
};
