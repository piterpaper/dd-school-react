import React from 'react';
import Header from '../../components/Header/header';
import Filter from '../../components/Filter/filter';
import Event from '../../components/Event/event';
import { AppRoute } from '../../const';
import {events} from "../../mocks"
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite'; 
import moment from 'moment';

const Form = observer(() => {

  const { allData } = events;

  let data;
  const id = useParams().id;
  
  if(id) {

    let curEl = allData.find(event => event._id === id);
    data = curEl;
    if (data === undefined) {
        data = {
            _id: null,
            data: moment().format('YYYY-MM-DDThh:mm')

        };
    }
    console.log(data);
} else {
  
    data = {
        _id: null,
        date: moment().format('YYYY-MM-DDThh:mm')
    };
}

  return (    
    <>
    <Header />
    <section className="main__wrapper">
        <Filter />
        <Event data={data}/>
    </section>
    
    </>
  
  );
});

export default Form;
