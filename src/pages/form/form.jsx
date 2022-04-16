import React from 'react';
import Header from '../../components/header/header';
import Archive from '../archive/archive';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board';
import { AppRoute } from '../../const';

const Form = () => {
  return (    
    <>
    <Header />
    <section className="main__wrapper">
        <Filter mode={AppRoute.EVENT}/>
        <Board mode={AppRoute.EVENT}/>
    </section>
    
    </>
  
  );
};

export default Form;
