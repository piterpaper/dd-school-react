import React from "react";
import Card from "../Card/card";
import Sorting from "../Sorting/sorting";
import LoadeMore from "../LoadMore/load-more";
import Event from "../Event/event";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";

const Board = () => {
  const pathname = useLocation().pathname.slice(0, 8);
  // console.log("pathname", pathname);

  return (
    <section className="board">
      {/*без события*/}
      {pathname === AppRoute.ARCHIVE.slice(0, 8) ? (
        <>
          <div className="board__events">
            <Card />
          </div>
          <LoadeMore />
        </>
      ) : (
        <>
          <Sorting />
          <div className="board__events">
            <Card />
          </div>
          <LoadeMore />
        </>
      )}
    </section>
  );
};

export default Board;
