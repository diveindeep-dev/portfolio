'use client';

import Nav from './nav';
import Portfolio from './_projects/portfolio';
import Deeplog from './_projects/deeplog';
import Tracker from './_projects/tracker';
import Photobooth from './_projects/photobooth';
import Chfa from './_projects/chfa';
import { SlideOpacity } from './_components/effect';
import { useRef } from 'react';

export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const onMoveToElement = (el: any) => {
    el.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main>
      <Nav />
      <Portfolio />
      <div className="relative">
        <div className="slide-section">
          <div className="scroll-container">
            <ul className="item-container">
              <div className="container-title flex-center">
                프로젝트 리스트 →
              </div>
              <li className="scroll-item" onClick={() => onMoveToElement(ref1)}>
                <div className="scroll-title">deeplog.</div>
                <div className="scroll-body">개인 개발 블로그</div>
              </li>
              <li className="scroll-item" onClick={() => onMoveToElement(ref2)}>
                <div className="scroll-title">Tracker</div>
                <div className="scroll-body">지키고 싶은 루틴</div>
              </li>
              <li className="scroll-item" onClick={() => onMoveToElement(ref3)}>
                <div className="scroll-title">CHFA</div>
                <div className="scroll-body">챈들러가 최애 앨범을</div>
              </li>
              <li className="scroll-item" onClick={() => onMoveToElement(ref4)}>
                <div className="scroll-title">PHOTOBOOTH</div>
                <div className="scroll-body">자신의 기기로 편하게</div>
              </li>
              <li className="container-title flex-center">
                <div className="scroll-title">COMING SOON...</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div ref={ref1}>
        <Deeplog />
      </div>
      <div ref={ref2}>
        <Tracker />
      </div>
      <div ref={ref3}>
        <Chfa />
      </div>
      <div ref={ref4}>
        <Photobooth />
      </div>
      <section>
        <div className="project-content">
          <div className="flex-center">
            <SlideOpacity cln="fin">fin.</SlideOpacity>
          </div>
        </div>
      </section>
    </main>
  );
}
