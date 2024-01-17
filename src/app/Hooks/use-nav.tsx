'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useNav = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isIconsActive, setIsIconsActive] = useState(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsAboutActive(false);
    setIsIconsActive(false);


    switch (pathname) {
      case '/':
        setIsHomeActive(true);
        console.log("Home is active!!!")
        break;
      case '/explore':
        setIsAboutActive(true);
        break;
      case '#Icons':
        setIsIconsActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isAboutActive,
    isIconsActive,
  };
};

export default useNav;
