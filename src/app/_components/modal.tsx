'use client';

import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { RxExternalLink, RxGithubLogo } from 'react-icons/rx';

export interface UrlProps {
  git: string;
  cname: string;
}

export default function Modal({
  handleClose,
  modalBody,
  title,
  url,
}: {
  handleClose: () => void;
  modalBody: JSX.Element;
  title: string;
  url: UrlProps;
}) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div className="modal-back" onClick={handleClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="icon-close" onClick={handleClose}>
            <div className="icon">
              <MdClose />
            </div>
          </div>
          <div className="modal-title">
            <h1>{title}</h1>
            <div className="icons">
              <a href={`https://${url.cname}diveindeep.dev`} target="_blank">
                <RxExternalLink />
              </a>
              <a
                href={`https://github.com/diveindeep-dev/${url.git}`}
                target="_blank"
              >
                <RxGithubLogo />
              </a>
            </div>
          </div>
        </div>
        {modalBody}
      </div>
    </div>
  );
}
