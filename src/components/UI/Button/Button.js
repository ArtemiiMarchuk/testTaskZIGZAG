import React from 'react'
import classes from './Button.module.scss'

export const Button = ({text, onClick}) => (
    <div className={classes.Button}>
        <button className={classes.Button__button} onClick={onClick}>{text}</button>
        <div className={classes.Button__shadow}/>
    </div>
)
