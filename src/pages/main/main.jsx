import React from "react";
import Header from '../../components/Header/header';
import Filter from '../../components/Filter/filter';
import Board from '../../components/Board/board'

const Main = () => {
    return(
        // React.Fragment
        <>
        <Header />
        <section className="main__wrapper">
        <Filter />
        <Board/>
        </section>
        </>
    )
}

export default Main;