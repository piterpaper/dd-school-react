import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import LoadeMore from "../LoadMore/load-more";
import Event from "../event/event"
import { AppRoute } from "../../const";

const Board = ({ mode }) => {
  return (
    <section className="board">
      {mode !== AppRoute.EVENT ? 
        <>
          {/* Тут будет сортировка */}
          <Sorting />
          <div className="board__events">
            <Card />
          </div>
          <LoadeMore />
        </>
       : 
        <Event />
      }
    </section>
  );
};

export default Board;
