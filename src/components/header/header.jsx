import React from "react";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({mode}) => {

  const pathname = useLocation().pathname.slice(0, 8);
       // console.log(AppRoute.ARCHIVE.slice(0, 8));
  return (
    <section className="main__header">
      <section className="main__header-wrap">
        <span className="main__header-logo">SomeList</span>
        <div className="main__header-group-lnk">
          <Link to="/" className={`main__header-lnk ${pathname === AppRoute.MAIN && 'lnk-active'}`}>События</Link>
          <Link to="/archive" className={`main__header-lnk ${pathname === AppRoute.ARCHIVE.slice(0,8) && 'lnk-active'}`}>Архив</Link>
        </div>
      </section>
    </section>
  );
};

export default Header;
