import React from "react";
import Card from "../Card/card";
import Sorting from "../Sorting/sorting";
import LoadeMore from "../LoadMore/load-more";
import Event from "../Event/event";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";

const Board = ({events}) => {
  const pathname = useLocation().pathname;
 
  return (
    <section className="board">
      {pathname !== AppRoute.ARCHIVE && <Sorting />}
      <div className="board__events">
                {events.map(event => <Card {...event} key={event._id} />)}
            </div>
            <LoadeMore />
    </section>
  );
};

export default Board;
