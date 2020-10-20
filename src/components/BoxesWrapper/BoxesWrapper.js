import React from 'react'
import classes from './BoxesWrapper.module.scss'

export const BoxesWrapper = ({boxes, activeBox, onClick}) => {
    const classesActive = [
        classes.BoxesWrapper__item,
        classes.BoxesWrapper__item_active
    ]

    return (
        <div className={classes.BoxesWrapper}>
            {
                boxes.map((box, key) => (
                    <div
                        key={key}
                        className={box.id === activeBox ? classesActive.join(' ') : classes.BoxesWrapper__item}
                        onClick={() => onClick(box.id)}
                    >
                        <div className={classes.BoxesWrapper__give}>Пополнить на<br/><span>$ {box.give}</span></div>
                        <div className={classes.BoxesWrapper__earn}>Получить<br/><span>$ {box.earn}</span></div>

                        <div className={classes.BoxesWrapper__label}/>
                    </div>
                ))
            }
        </div>
    )
}
