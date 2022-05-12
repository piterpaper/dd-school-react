import React from "react";
import Card from "../Card/card";
import Sorting from "../Sorting/sorting";
import LoadeMore from "../LoadMore/load-more";
import Event from "../Event/event";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";

const Board = ({events}) => {
  const pathname = useLocation().pathname.slice(0, 8);
 
  return (
    <section className="board">
      {pathname === AppRoute.ARCHIVE.slice(0, 8) && <Sorting />}
      <div className="board__events">
                {events.map(event => <Card {...event} key={event._id} />)}
            </div>
            <LoadeMore />
    </section>
  );
};

export default Board;
