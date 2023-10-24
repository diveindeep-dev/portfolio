'use client';

import { ReactNode } from 'react';

export function Browser({ children }: { children: ReactNode }) {
  return (
    <div className="browser">
      <div className="circles">
        <div
          className="circle"
          style={{ backgroundColor: '#ff4f4d', left: 15 }}
        />
        <div
          className="circle"
          style={{ backgroundColor: '#ffba00', left: 30 }}
        />
        <div
          className="circle"
          style={{ backgroundColor: '#02cd15', left: 45 }}
        />
      </div>
      <div className="browser-content">{children}</div>
    </div>
  );
}
