import React from "react";
import { Link } from "react-router-dom";
import styles from './notFound.module.scss'


const NotFound = () =>{
   

    return(
        <div className={styles.error}>
            <h1 className={styles.numberError}>404<span>...</span></h1>
            <p className={styles.notFound}>Запрашиваемая страница не найдена.</p>
            <p className={styles.back}>Перейдите на главную</p>
            <Link to="/" className={styles.return}>Главная</Link>
           
        </div>
    )

}

export default NotFound ;