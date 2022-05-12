import React from 'react';
import Header from '../../components/Header/header';
import Filter from '../../components/Filter/filter';
import Event from '../../components/Event/event';
import { AppRoute } from '../../const';
import {events} from "../../mocks"
import { useParams } from 'react-router-dom';

const Form = () => {

  let date;
  const id = useParams().id;

  if(id) {
    console.log(id + 'id есть');
    let curEl = events.find(event => event._id === id);
    date = curEl;
    if (date === undefined) {
        date = {
            _id: null
        };
    }
    console.log(date);
} else {
    console.log('id нет')
    date = {
        _id: null
    };
}

  return (    
    <>
    <Header />
    <section className="main__wrapper">
        <Filter mode={AppRoute.EVENT}/>
        <Event date={date}/>
    </section>
    
    </>
  
  );
};

export default Form;
