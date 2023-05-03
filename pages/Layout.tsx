import { useState } from 'react';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Sidebar toggle={toggle} onClick={handleToggle} />
      <Header toggle={toggle} onClick={handleToggle} />
      {/* <!-- sherah Dashboard --> */}
      <section className="sherah-adashboard sherah-show">
        <div className="container">
          <div className="row">
            <div className="col-12 sherah-main__column">
              <div className="sherah-body">
                {/* <!-- Dashboard Inner --> */}
                <div className="sherah-dsinner">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
