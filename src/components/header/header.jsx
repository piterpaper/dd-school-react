import React from "react";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { clearArchive } from '../../api';

const Header = ({ mode }) => {
  const pathname = useLocation().pathname.slice(0, 8);

  const handleDelete = () => {
    clearArchive();
  }
  
  return (
    <section className="main__header">
      <section className="main__header-wrap">
        <span className="main__header-logo">SomeList</span>
        <div className="main__header-group-lnk">
          <Link to="/"className={`main__header-lnk ${pathname === AppRoute.MAIN && "lnk-active"}`}>События</Link>
          <Link to="/archive"className={`main__header-lnk ${pathname === AppRoute.ARCHIVE.slice(0, 8) && "lnk-active"}`}>Архив</Link>
          <button className="main__header-del" onClick={handleDelete} style={{backgroundColor: "#1d4c69", border: "1px solid #fff", color: "white", cursor: "pointer", marginBottom:"5px", marginTop:"5px",width:"100px", padding:"5px", borderRadius:"5px", fontSize:"12px"}}>
            Удалить все в архиве
          </button>
        </div>
      </section>
    </section>
  );
};

export default Header;
