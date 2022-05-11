import React from 'react';
import Header from '../../components/Header/header';
import Filter from '../../components/Filter/filter';
import Event from '../../components/Event/event';
import { AppRoute } from '../../const';

const Form = () => {
  return (    
    <>
    <Header />
    <section className="main__wrapper">
        <Filter mode={AppRoute.EVENT}/>
        <Event/>
    </section>
    
    </>
  
  );
};

export default Form;
