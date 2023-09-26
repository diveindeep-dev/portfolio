'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion, cubicBezier } from 'framer-motion';
import Project from './project';

export default function Cover() {
  const scrollGraphicRef = useRef<HTMLDivElement>(null);
  const graphicScroll = useScroll({
    target: scrollGraphicRef,
    offset: ['0 0', '1 0'],
  });

  const lineX = useTransform(
    graphicScroll.scrollYProgress,
    [0, 1],
    ['-25px', '-1500px'],
  );

  const gridX = useTransform(
    graphicScroll.scrollYProgress,
    [0, 1],
    ['25px', '1500px'],
  );

  const rotate = useTransform(
    graphicScroll.scrollYProgress,
    [0, 1],
    [-395, -35],
  );
  const width = useTransform(
    graphicScroll.scrollYProgress,
    [0, 0.5, 1],
    [350, 700, 1500],
  );

  const height = useTransform(
    graphicScroll.scrollYProgress,
    [0, 0.5, 1],
    [200, 400, 1500],
  );

  const scrollTextRef = useRef<HTMLDivElement>(null);
  const textScroll = useScroll({
    target: scrollTextRef,
    offset: ['1 0.5', '1 0.2'],
  });

  const opacityOval = useTransform(
    textScroll.scrollYProgress,
    [0.7, 1],
    [1, 0.6],
  );

  const scale = useTransform(
    textScroll.scrollYProgress,
    [0, 0.5, 1],
    [0, 2, 1.1],
  );

  const opacity = useTransform(textScroll.scrollYProgress, [0, 0.5], [0, 1]);

  const opacitySmallText = useTransform(
    textScroll.scrollYProgress,
    [0.5, 1],
    [0, 1],
  );

  return (
    <div className="cover">
      <div className="cover-graphic-scroll" ref={scrollGraphicRef} />
      <div className="cover-text-scroll" ref={scrollTextRef} />
      <div className="cover-content">
        <div className="cover-sticky">
          <motion.div
            className="oval oval-line"
            style={{ x: lineX, rotate: -35 }}
          />
          <motion.div
            className="oval oval-color"
            style={{ rotate, width, height, opacity: opacityOval }}
          />
          <motion.div
            className="oval oval-grid"
            style={{ x: gridX, rotate: -35 }}
          />
        </div>
        <div className="cover-sticky column">
          <motion.div style={{ opacity, scale }}>
            <h2>PORTFOLIO</h2>
          </motion.div>
          <motion.div style={{ opacity: opacitySmallText }}>
            <div>Dive in Deep</div>
          </motion.div>
        </div>
      </div>
      <Project title={'PORTFOLIO'}>
        <div className="gradient" />
      </Project>
    </div>
  );
}
