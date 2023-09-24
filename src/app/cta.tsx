'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function Cta({ title }: { title: string }) {
  const svgPlus = 'https://assets.codepen.io/907368/add.svg';
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { margin: '-300px' });

  const durationLarge = 0.4;
  const durationZero = 0.3;
  const durationLong = 0.5;

  const appearVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: durationLarge },
        opacity: { duration: durationLarge },
      },
    },
  };

  const backVariants = {
    offscreen: { scale: 0, width: '56px' },
    onscreen: {
      scale: 1,
      width: 'auto',
      transition: {
        scale: { duration: durationLarge },
        width: { delay: durationLarge + durationZero, duration: durationLong },
      },
    },
  };

  const textVariants = {
    offscreen: { opacity: 0, padding: '0 70px 0 28px' },
    onscreen: {
      opacity: 1,
      padding: '0 64px 0 28px',
      transition: {
        padding: {
          type: 'spring',
          delay: durationLarge + durationZero + durationLong,
          duration: durationLong,
        },
        opacity: {
          type: 'spring',
          delay: durationLarge + durationZero + durationLong,
          duration: durationLong,
        },
      },
    },
  };

  const fakeBackVariants = {
    offscreen: { scale: 0, opacity: 1 },
    onscreen: {
      scale: 1,
      opacity: 0,
      transition: {
        scale: { duration: durationLarge },
        opacity: { delay: durationLarge, duration: durationZero },
      },
    },
  };

  const fakeBlueVariants = {
    offscreen: { scale: 0, opacity: 0.9 },
    onscreen: {
      scale: [2.2, 0],
      transition: {
        scale: { duration: durationLarge + durationZero, times: [0.5, 1] },
      },
    },
  };

  const blueVariants = {
    offscreen: { scale: 0 },
    onscreen: {
      scale: 1,
      transition: {
        scale: { delay: durationLarge + durationZero, duration: 0.3 },
      },
    },
  };

  return (
    <div className="cta-container" ref={inViewRef}>
      <motion.div
        className="cta"
        variants={appearVariants}
        initial="offscreen"
        animate={isInView ? 'onscreen' : 'offscreen'}
      >
        <motion.div className="cta-content" variants={backVariants}>
          <motion.div className="fake-back" variants={fakeBackVariants} />
          <motion.div className="fake-blue" variants={fakeBlueVariants} />
          <motion.p variants={textVariants}>{title} 자세히 알아보기</motion.p>
          <motion.div className="icon" variants={blueVariants}>
            <Image src={svgPlus} alt="a" width={20} height={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
