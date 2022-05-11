import React from "react";
import Board from "../../components/Board/board";
import Header from "../../components/Header/header";
import { AppRoute } from "../../const.js";
import { useParams } from "react-router-dom";

const Archive = (props) => {
 
  return (
    <>
      <Header />
            <section className="main__wrapper">
                <Board />
            </section>
    </>
  );
};

export default Archive;
