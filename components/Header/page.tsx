import { useEffect, useState } from 'react';
import PCHeader from "./PCHeader/page";
import MobileHeader from "./MobileHeader/page";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = (): boolean => window.innerWidth < 768;

    setIsMobile(checkMobile());

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile === null) {
    return null;
  }

  return (
    <div>
      {isMobile ? <MobileHeader /> : <PCHeader />}
    </div>
  )
}

export default Header;
