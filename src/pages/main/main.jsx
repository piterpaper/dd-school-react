import React from "react";
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board'
import { AppRoute } from "../../const.js";

const Main = () => {
    return(
        // React.Fragment
        <>
        <Header mode={AppRoute.MAIN}/>
        <section className="main__wrapper">
        <Filter mode={AppRoute.MAIN}/>
        <Board mode={AppRoute.MAIN}/>
        </section>
        </>
    )
}

export default Main;