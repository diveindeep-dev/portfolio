'use client';

import { ReactNode } from 'react';
import Cta from './cta';

export default function Project({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section className="project">
      <div className="section-content">{children}</div>
      <Cta title={title} />
    </section>
  );
}
