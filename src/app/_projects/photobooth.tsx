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
        <div className="modal-box sub">
          <h3>💡 주요 특징</h3>
          <div>
            정적 웹사이트 / 반응형 디자인 / 다크모드 지원 / SEO 적용 / 컨텐츠
            파일 비공개 관리 / MDX / 카테고리&태그 / 댓글
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="modal-box sub">
          <h3>우선 보기 편해야 합니다.</h3>
          <div className="modal-row-box">
            <div>
              기기 상관없이 편하게 보기 위해서, 반응형 디자인으로 만들었습니다.
              미디어 쿼리를 작성하여 크게 모바일/웹으로 나누었으며, 필요한
              페이지는 테블릿 사이즈도 스타일링했어요.
            </div>
            <div>
              <h4>☀️테마 변경도 지원합니다🌙</h4>
              <div>
                상단 헤더에 스위치를 위치시켜서 어느 페이지에서도 테마를 변경할
                수 있어요. 사용자의 시스템 환경에 맞춰 테마를 자동으로
                설정해주고, localStorage를 이용하여 재방문시에 테마를
                유지시켜줍니다.
              </div>
              <div>
                SSR 상황에서도 깜박임이나 지연 없이 자연스럽게 변경시키기 위해
                hydration을 이해하려 노력했습니다. React Context를 사용하여 테마
                상태 관리하고, CSS custom Properties를 사용하였습니다.
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="modal-box sub">
          <h4>모든 컨텐츠를 볼 수 없으니</h4>
          <h3>다양하게 분류할 수 있도록 했습니다.</h3>
          <div>
            우선, 모든 글은 내림차순으로 정리하여 최근글을 먼저 볼 수 있도록
            하였습니다.
            <br />
            <span className="main"> Tag</span>은 탭 구분없이 모두 적용하여
            보여줍니다.
            <br />
            (전체 Tag와 Category를 모아둔 페이지도 있습니다.)
            <br />
            당연히 제목을 <span className="main">검색</span>할 수 있습니다.
          </div>
          <div className="modal-row-box">
            <div>
              <h4>블로그 탭에선</h4>
              <div>
                <span className="main">Category</span> 항목을 추가했어요.
                <br />
                시리즈로 구성된 글들을 모아 볼 수 있습니다.
              </div>
            </div>
            <div>
              <h4>
                노트 탭에선
                <br />좀 더 세심하게 구분하려 했습니다.
              </h4>
              <div>
                알고리즘 문제 풀이인지, 간단한 강의 노트인지, 책 독후감인지
                <span className="main"> TYPE</span>을 분류해 놓았습니다.
              </div>
              <div>
                노트탭은 보통 출처가 있는 것들입니다. 알고리즘의 문제나,
                개인적으로 공부한 강의 등 출처를 구분짓기 위하여
                <span className="main"> FROM</span>항목을 마련했습니다.
              </div>
              <div>
                난이도를 구분하고 싶은 컨텐츠를 위해
                <span className="main"> LEVEL</span>도 분류할 수 있게
                해놓았습니다. 특히 알고리즘 문제풀이때 유용할 것 같아요.
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="modal-box sub">
          <h3>블로그 글이 검색되었으면 좋겠어요.</h3>
          <h4>그래서 SEO를 적용시켰습니다.</h4>
          <div>
            구글의 검색엔진 최적화 가이드를 따라 title, description, image, url
            페이지 정보를 추가시켜 정확도를 높였습니다. 조금 더 풍부한 데이터를
            구글에게 확실하게 전달하기 위하여 구조화된 데이터도 추가하였습니다.
            이는 특정 콘텐츠를 리치결과로 보여줄 확률을 높여줍니다. 또한
            소셜에서 풍부한 정보를 제공하기 위하여 Open Graph를 추가해
            주었습니다.
          </div>
          <div>전체 코드를 공개하고 싶지만,</div>
          <h4> 포스트 컨텐츠 파일은 공개하고 싶지 않았습니다.</h4>
          <div>
            git submodule을 이용하여 별도의 private repository로 관리하였습니다.
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
