'use client';

import { useState, useEffect } from 'react';

// Components
import { Icon } from '@/ui/components';

// Constants
import { TYPE } from '@/constants';

const ScrollTop = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <div className="fixed bottom-5 right-5 z-50 transition">
          <Icon
            src="/arrow-up.svg"
            alt="Go to top"
            width={24}
            height={24}
            variant={TYPE.SECOND}
            onClick={scrollToTop}
          />
        </div>
      )}
    </>
  );
};

export default ScrollTop;
