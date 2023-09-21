'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

export default function IObserver({
  children,
  classInOut,
}: {
  children: ReactNode;
  classInOut?: string[];
}) {
  const target = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleRatio: IntersectionObserverCallback = ([entry]) => {
    const target = entry.target as HTMLElement;
    if (target.style) {
      target.style.opacity = entry.intersectionRatio.toString();
    }
  };

  const handleClass: IntersectionObserverCallback = ([entry]) => {
    setIsVisible(entry.isIntersecting);
  };

  const option = classInOut
    ? { handle: handleClass, thres: [0.5] }
    : {
        handle: handleRatio,
        thres: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      };

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = target;

    if (current) {
      observer = new IntersectionObserver(option.handle, {
        threshold: option.thres,
      });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  });

  return (
    <div
      ref={target}
      className={classInOut && (isVisible ? classInOut[0] : classInOut[1])}
    >
      {children}
    </div>
  );
}
