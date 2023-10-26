'use client';

import Project from '../_components/project';
import { SlideOpacity, SlideUp } from '../_components/effect';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';

function modalBody() {
  return (
    <div>
      <SlideUp>
        <div className="modal-box sub">
          <h3>🎯 목표</h3>
          <div>서버와 데이터베이스를 만들어보고 API를 직접 설계</div>
          <div>회원 가입부터 로그인, 로그아웃까지 전반적인 흐름 경험</div>
          <div>Redux와 Redux Toolkit을 통한 상태관리</div>
        </div>
        <div className="modal-box sub">
          <h3>🛠️ Skills or Tools</h3>
          <div className="modal-row-box">
            <div>
              <h4>Client Side</h4>
              <div>
                Typescript, React, ES2015+, 컴포넌트 기반 아키텍쳐를 위한 React,
                Redux&Redux Toolkit을 이용한 State 관리, React Router, Axios,
                Styled-components, Jest, Cypress, Git, Netlify
              </div>
            </div>
            <div>
              <h4>Server Side</h4>
              <div>
                Node.js, Express, ES2015+, JSON Web Token(JWT), Bcrypt를 이용한
                암호화, MongoDB기반 NoSQL Database, Mongoose, Git, cloudtype
              </div>
            </div>
          </div>
        </div>
        <div className="modal-box sub">
          <h3>💡 주요 특징</h3>
          <div>
            사용자 정보 저장을 위한 서버 생성 / 다양한 Validation을 설정한
            회원가입 / JWT를 이용한 사용자 인증 / 로그인 유지 / 사용자 정보 수정
            / IntersectionObserver를 사용한 무한스크롤 / 반응형 웹
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="modal-box sub">
          <h3>회원가입/로그인의 흐름을 경험하기위해</h3>
          <h4>서버를 만들었습니다.</h4>
          <div className="modal-row-box">
            <div>
              <h4>JSON Web Token을 이용한 사용자 인증</h4>
              <div>
                JWT의 구조 및 특징을 바탕으로 토큰 기반 인증의 원리와 장점들을
                전반적으로 알 수 있었습니다. 비밀번호 같은 민감한 정보들은
                Bcrypt를 사용하여 서버 저장 전 미리 해싱하여 보안성을
                높였습니다.
              </div>
            </div>
            <div>
              <h4>IntersectionObserver를 사용한 무한스크롤</h4>
              <div>
                전체 데이터를 요청하는 페이지에선, 스크롤에 따라 순차적으로
                데이터를 요청하도록 구현하였습니다.
              </div>
              <div>
                스크롤이 bottom으로 일정부분 다가가면 다음부분 데이터를
                요청하여, 한번에 불필요한 데이터를 불러오지 않도록 했습니다.
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
    </div>
  );
}

export default function Tracker() {
  const today = new Date().getDate();
  return (
    <Project
      title={'TRACKER'}
      url={{
        cname: 'tracker.',
        git: 'tracker-client',
      }}
      modalBody={modalBody()}
    >
      <div className="project-content">
        <SlideOpacity>
          <h2>TRACKER</h2>
        </SlideOpacity>
        <SlideUp>
          <div className="description">
            <div className="sub">작심삼일 7번,</div>
            2주 동안 지키고 싶은 루틴
          </div>
        </SlideUp>
        <div className="tracker">
          <div className="tracker-box">
            <div className="tracker-mark-x">
              <BsXCircle />
            </div>
            <div className="tracker-past">{today - 2}</div>
          </div>
          <div className="tracker-box">
            <div className="tracker-mark">
              <BsCheckCircle />
            </div>
            <div className="tracker-past">{today - 1}</div>
          </div>
          <div className="tracker-box">
              <SlideOpacity cln={'tracker-mark'}>
                <BsCheckCircle />
              </SlideOpacity>
            <div className="tracker-past">{today}</div>
          </div>
          <div className="tracker-box">{today + 1}</div>
        </div>
        <div className="grid">
          <div>
            <div className="block-title">Client Side</div>
            <div className="block-body sub">
              <div>
                Redux & <span className="main">Redux Toolkit</span>을 이용한
                상태 관리,
              </div>
              <div>
                <span className="main">IntersectionObserver</span>를 이용한
                무한스크롤
              </div>
              <div>
                <span className="main">Axios</span>를 이용한 비동기처리
              </div>
              <div>localStorage 로그인 유지</div>
              <div>
                <span className="main">date-fns</span>라이브러리를 이용한 날짜
                관리
              </div>
              <div>사용자 개별 프로필, 반응형 웹, Tag 기능</div>
              <div>
                <span className="main">Styled-components</span>통한 스타일링
              </div>
            </div>
          </div>
          <div>
            <div className="block-title">Server Side</div>
            <div className="block-body sub">
              <div>
                <span className="main">Node.js</span> 서버
              </div>
              <div>
                Express.js를 이용한 <span className="main">RESTful API</span>{' '}
                설계
              </div>
              <div>
                <span className="main">MongoDB</span>기반 NoSQL Database
              </div>
              <div>
                <span className="main">JSON Web Token(JWT)</span>을 이용한
                사용자 인증,
              </div>
              <div>
                Object Data Modeling 라이브러리{' '}
                <span className="main">Mongoose</span>
              </div>
              <div>
                <span className="main">Bcrypt</span>(bcryptjs)를 이용한 암호화
              </div>
            </div>
          </div>
        </div>
      </div>
    </Project>
  );
}
