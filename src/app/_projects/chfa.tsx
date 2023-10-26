'use client';

import Image from 'next/image';
import Project from '../_components/project';
import { SlideOpacity, SlideUp } from '../_components/effect';
import { RxExternalLink } from 'react-icons/rx';
import chandler from '/public/assets/chandler.png';
import albums from '/public/assets/albums.gif';

function modalBody() {
  return (
    <div>
      <SlideUp>
        <div className="modal-box sub">
          <h3>🎯 목표</h3>
          <div>
            Cors 에러를 해결하여 Open API를 이용해서 밈 이미지 생성기 만들기
          </div>
        </div>
        <div className="modal-box sub">
          <h3>🛠️ Skills or Tools</h3>
          <div>
            Typescript React ES2015+ Node.js Express Styled-components Netlify
            cloudtype Git
          </div>
        </div>
        <div className="modal-box sub">
          <h3>💡 주요 특징</h3>
          <div>
            Cors 에러 해결을 위한 서버 생성 / last.FM의 Open API 사용 /
            debounce이용한 검색 요청 제어 / dom-to-image, file-saver를 통한
            컴포넌트 이미지 변환 후 저장
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="modal-box sub">
          <h4>Open API를 자유롭게 사용하기 위해</h4>
          <h3>Cors 에러를 해결하기 위한 서버를 만들었습니다.</h3>
          <div className="modal-row-box">
            <div>
              <h4>
                last.FM의 Open API를 사용하여 전세계 음반 데이터를
                이용하였습니다.
              </h4>
              <div>
                Node.js+Express로 서버를 만들었습니다. 서버에서 허용할 출처를
                만들어 Cors에러를 해결하였습니다.
              </div>
              <div>
                또한, 앨범 커버가 중요한 작업이므로
                <br />
                요청된 데이터 중 앨범 커버가 없는 데이터는 출력되지 않도록
                결과를 조정했습니다.
              </div>
            </div>
            <div>
              <h4>Debounce hook을 만들어 검색요청을 제어했습니다.</h4>
              <div>
                키보드로 작성되는 문자 하나하나에 검색을 적용하면 너무 많은
                데이터 요청이 발생합니다.
              </div>
              <div>
                입력 주기를 500ms로 설정하고, 많은 문자가 작성되더라도
                입력주기가 끝날때만 데이터를 요청하도록 useDebounce hook을
                만들어 사용하였습니다.
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
    </div>
  );
}

export default function Chfa() {
  return (
    <Project
      title={'CHFA'}
      url={{
        cname: 'chfa.',
        git: 'chandler-hugging-album',
      }}
      modalBody={modalBody()}
    >
      <div className="back">
        <div className="back-relative">
          <div className="bg">
            <div className="fade-out" />
            <div className="bg-content">
              <Image src={chandler} alt="chandler" className="chandler" />
              <Image src={albums} alt="albums" className="albums" />
            </div>
          </div>
        </div>
      </div>
      <div className="project-content">
        <SlideOpacity>
          <h2>
            Chandler Hugging
            <br />
            my Favorite Album
            <a
              href="https://chfa.diveindeep.dev"
              className="external-link"
              target="_blank"
            >
              <RxExternalLink />
            </a>
          </h2>
        </SlideOpacity>
        <SlideUp>
          <div className="description">
            <div className="sub">챈들러가</div>
            나의 최애 앨범을
            <br />
            껴안고 있어요.
          </div>
        </SlideUp>
      </div>
      <div className="project-content-last" />
    </Project>
  );
}
