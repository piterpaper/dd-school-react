import React from "react";
import Card from "../card/card";

const Board = () => {
  return (
    <section className="Board">
      {/* тут будет сортировка */}
      <div className="board__events">
        <Card />
      </div>
      
      <button className="load-more" type="button">
        Загрузить еще
      </button>
      
    </section>
    
  );
};

export default Board;
