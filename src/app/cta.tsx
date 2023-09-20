'use client';

import { ReactNode } from 'react';
import style from '../styles/cta.module.css';

export default function Cta({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={style.ctaContainer}>
        <div className={style.cta}>
          <div className={style.ctaContent}>
            <div className={style.text}>{children}</div>
            <div className={style.iconPlus}>+</div>
          </div>
        </div>
      </div>
    </>
  );
}
