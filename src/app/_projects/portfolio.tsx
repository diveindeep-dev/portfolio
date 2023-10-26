'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Project from '../_components/project';
import { RxExternalLink, RxGithubLogo } from 'react-icons/rx';
import { config } from '@/config';
import { SlideOpacity, SlideUp } from '../_components/effect';
import { BsChevronCompactDown } from 'react-icons/bs';

function modalBody() {
  return (
    <div>
      <h2>dkdkdkdkdk</h2>
    </div>
  );
}

export default function Portfolio() {
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
      <div className="project relative">
        <div className="gradient" />
        <div className="project-content-start margin-auto">
          <SlideOpacity>
            <h2>
              Portfolio
              <a
                href={`https://${config.github}/portfolio`}
                className="external-link"
                target="_blank"
              >
                <RxGithubLogo />
              </a>
            </h2>
          </SlideOpacity>
          <SlideUp>
            <div className="description sub">
              처음부터 끝까지 혼자서 제작한
              <br />
              프로젝트를 모아두었습니다.
            </div>
          </SlideUp>
          <div className="grid">
            <div className="block-body sub">
              <div className="block-body sub">
                프로젝트를 모아 보여주는 페이지를 만드는 것이 목적이었습니다.
                아이폰 15프로 페이지의 디자인 및 애니메이션을 적용시킨 페이지로
                직접 만들어 보기로 했습니다.
              </div>
              <div className="block-body sub">
                각 프로젝트 섹션별로 <span className="main">CTA 버튼</span>
                을 만들어 <br /> Modal을 등장시킬 수 있도록 하였습니다.
              </div>
            </div>
            <SlideUp cln="block-body-sub sub">
              <div className="block-body sub">
                Modal 안에는 좀 더 자세한 특징과 함께,
                <br />
                <span className="main">배포 페이지와, 깃허브 레포지토리</span>를
                연결 시켜 두었습니다.
              </div>
              <div className="sub">
                현재 페이지는 <span className="main">Next.js</span>를 뼈대로
                Framer의
                <span className="main"> framer-motion</span>을 활용하여
                애니메이션을 구현하였습니다.
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </div>
  );
}
