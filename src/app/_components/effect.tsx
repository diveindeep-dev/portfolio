'use client';

import { ReactNode, useRef } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

export function SlideOpacity({
  children,
  cln,
}: {
  children: ReactNode;
  cln?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['1 1', '0.8 0.8'],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 1], ['0%', '100%']);

  return (
    <motion.div ref={scrollRef} style={{ opacity }} className={`${cln}`}>
      {children}
    </motion.div>
  );
}

export function SlideScale({
  children,
  cln,
}: {
  children: ReactNode;
  cln?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['0.5 1', '0.8 0.8'],
  });

  const scale = useSpring(scrollYProgress);

  return (
    <motion.div ref={scrollRef} style={{ scale }} className={`${cln}`}>
      {children}
    </motion.div>
  );
}

export function SlideUp({
  children,
  cln,
}: {
  children: ReactNode;
  cln?: string;
}) {
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { margin: '-100px' });

  const slideupVariants = {
    hide: { opacity: 0, y: '25px' },
    slideup: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={inViewRef}
      variants={slideupVariants}
      initial="hide"
      animate={isInView ? 'slideup' : 'hide'}
      transition={{ duration: 0.5, ease: [0, 0, 0.5, 1] }}
      className={`relative ${cln}`}
    >
      {children}
    </motion.div>
  );
}
