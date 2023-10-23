'use client';

import { ReactNode, useState } from 'react';
import Cta from './cta';
import Modal, { UrlProps } from './modal';

export default function Project({
  children,
  title,
  modalBody,
  url,
}: {
  children: ReactNode;
  title: string;
  modalBody: JSX.Element;
  url: UrlProps;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="project">
      {children}
      <Cta title={title} handleOpen={() => setIsOpen(true)} />
      {isOpen && (
        <Modal
          handleClose={() => setIsOpen(false)}
          title={title}
          url={url}
          modalBody={modalBody}
        />
      )}
    </section>
  );
}
