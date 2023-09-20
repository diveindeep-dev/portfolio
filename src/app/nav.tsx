'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolled && window.scrollY > 350) {
        setIsScrolled(true);
      } else if (isScrolled && window.scrollY <= 350) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav className={isScrolled ? 'show' : 'hide'}>
      <div className="nav-content">
        <div>Dive in Deep</div>
        <a
          className="blue-link"
          href="https://diveindeep.space/"
          target="_blank"
        >
          BLOG
        </a>
      </div>
    </nav>
  );
}
