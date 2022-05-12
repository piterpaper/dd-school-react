import React from "react";
import Board from "../../components/Board/board";
import Header from "../../components/Header/header";

import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Archive = ({events}) => {
 
  const {id} = useParams();

  const archiveEvents = events.filter( x => x.archive === true)

  return (
    <>
      <Header />
            <section className="main__wrapper">
                <Board events={archiveEvents} />
            </section>
    </>
  );
};

export default Archive;
