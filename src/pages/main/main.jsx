import React from "react";
import Header from '../../components/Header/header';
import Filter from '../../components/Filter/filter';
import Board from '../../components/Board/board'
import { events } from "../../store/store";
import { observer } from "mobx-react-lite";

const Main =observer(() => {

    const {notArchiveData} = events;

    return(
        // React.Fragment
        <>
        <Header />
        <section className="main__wrapper">
        <Filter />
        <Board events={notArchiveData}/>
        </section>
        </>
    )
});

export default Main;