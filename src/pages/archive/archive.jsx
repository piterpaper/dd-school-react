import React from "react";
import Board from "../../components/Board/board";
import Header from "../../components/Header/header";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { events } from "../../store/store";
import { observer } from 'mobx-react-lite';

const Archive = observer(() => {
 
  const {archiveData} = events;

  return (
    <>
      <Header />
            <section className="main__wrapper">
                <Board events={archiveData} />
            </section>
    </>
  )
});

export default Archive;
