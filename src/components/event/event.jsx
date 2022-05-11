import React from "react";
import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";


const Event = () => {

  const [id, setId] = useState('');
console.log('id ', id)
  const params = useParams();

  useEffect(() => setId(params.id), [params.id]);
  
    let heading, button;
    if (id){
        heading = `Изменение события ${id}`;
        button = 'Сохранить'
    } else {
        heading = 'Добавление события';
        button = 'Добавить'
    }
  return (
    <form className="board__form">
      <h2 className="board__title">{heading}</h2>
      <fieldset className="board__field board__field--theme">
        <label htmlFor="theme" className="board__label board__label--theme">
          Тема:
        </label>
        <textarea
          type="text"
          className="board__input board__input--theme"
          name="theme"
          required
        ></textarea>
      </fieldset>
      <fieldset className="board__field board__field--comment">
        <label htmlFor="comment" className="board__label board__label--comment">
          Комментарий:
        </label>
        <textarea
          type="text"
          className="board__input board__input--comment"
          name="comment"
          required
        ></textarea>
      </fieldset>
      <fieldset className="board__field board__field--date">
        <label htmlFor="date" className="board__label board__label--date">
          Дата:
        </label>
        <input
          type="datetime-local"
          className="board__input board__input--date"
          name="date"
        />
      </fieldset>
      <div className="btns">
        <button type="submit" className="btn-submit">{button}</button>
        <button type="reset" className="btn-reset">Очистить</button>
      </div>
    </form>
  );

};

export default Event;