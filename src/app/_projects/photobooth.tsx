'use client';

import { RxExternalLink } from 'react-icons/rx';
import Project from '../_components/project';
import { SlideOpacity, SlideScale, SlideUp } from '../_components/effect';
import { Browser } from '../_components/block';
import Image from 'next/image';
import photobooth from '../../../public/assets/photobooth.png';

function modalBody() {
  return (
    <div>
      <SlideUp>
        <div className="modal-box sub">
          <h3>🎯 목표</h3>
          <div>랩탑의 웹캠과 모바일 카메라를 활용한 앱 만들기</div>
        </div>
        <div className="modal-box sub">
          <h3>🛠️ Skills or Tools</h3>
          <div>
            Next.js Typescript ES2015+ tailwindcss react-webcam html2canvas
            file-saver Netlify
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="modal-box sub">
          <h3>언제어디서나 네컷을 찍을 수 있습니다.</h3>
          <div className="modal-row-box">
            <div>
              노트북, 휴대폰, 테블릿 웹캠과 전면카메라가 지원된다면 어디서든
              네컷을 찍고 저장할 수 있습니다.
              <br />
              서버에 따로 저장하지 않아 유출위험이 없고, 브라우저 메모리를
              사용하여 이미지를 관리합니다.
            </div>
            <div>
              <h4>특별한 프레임을 만들 수 있습니다.</h4>
              <div>
                이벤트 프레임처럼 다양한 이미지를 프레임 안에 집어 넣어 재밌는
                사진을 찍을 수 있도록 했습니다. 코드를 입력하는 방식으로
                구현하여 코드를 아는 사람만 진행 할 수도 있습니다.
                <br /> * 데모 페이지에서 sherlocked를 입력해보세요.
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
    </div>
  );
}

export default function Photobooth() {
  return (
    <Project
      title={'PHOTOBOOTH'}
      url={{ git: 'photobooth', cname: 'photobooth.' }}
      modalBody={modalBody()}
    >
      <div className="project-content">
        <SlideOpacity>
          <h2>
            PHOTOBOOTH
            <a
              href="https://photobooth.diveindeep.dev"
              className="external-link"
              target="_blank"
            >
              <RxExternalLink />
            </a>
          </h2>
        </SlideOpacity>
        <SlideUp>
          <div className="description">
            <div className="sub">인O네컷, 포토O즘...</div>
            <div>본인의 기기로 편하게 찍어보세요.</div>
          </div>
        </SlideUp>
        <SlideScale cln="flex-center column">
          <Browser>
            <Image
              src={photobooth}
              alt="mode"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              className="deeplog-mode"
            />
          </Browser>
          <div className="block-body sub">
            <div>
              🛠️ <span className="main">Next.js, </span>
              Typescript, <span className="main">web cam, </span>
              tailwindcss,
              <span className="main"> html2canvas,</span> file-saver, ...
            </div>
          </div>
        </SlideScale>
      </div>
    </Project>
  );
}
