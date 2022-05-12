import React from "react";
import Header from '../../components/Header/header';
import Filter from '../../components/Filter/filter';
import Board from '../../components/Board/board'

const Main = ({events}) => {
    return(
        // React.Fragment
        <>
        <Header />
        <section className="main__wrapper">
        <Filter />
        <Board events={events}/>
        </section>
        </>
    )
}

export default Main;