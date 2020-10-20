import React from 'react'
import classes from './Select.module.scss'
import arrow from '../../../assets/images/arrow.svg'

export const Select = ({activeItem, items, onChange, opened, toggle}) => {
    activeItem = items.filter(el => el.id === activeItem)[0]

    const wrapperClass = [
        classes.Select__itemsWrapper,
        !opened ? classes.Select__itemsWrapper_closed : null
    ]

    const activeClasses = [
        classes.Select__item,
        classes.Select__item_active,
        opened ? classes.Select__item_active_opened : null
    ]

    const arrowClass = [
        classes.Select__arrow,
        opened ? classes.Select__arrow_opened : null
    ]

    const itemClickHandler = id => {
        onChange(id)
    }


    return (
        <div
            className={classes.Select}
            onClick={event => event.stopPropagation()}
        >
            <div
                onClick={() => toggle(undefined)}
                className={activeClasses.join(' ')}
            >
                <img className={classes.Select__image} src={activeItem.image} alt=""/>
                {activeItem.text}
                <img className={arrowClass.join(' ')} src={arrow} alt=""/>
            </div>

            <div
                className={wrapperClass.join(' ')}
            >
                {
                    items.map((item, key) => (
                        <div
                            key={key}
                            className={classes.Select__item}
                            onClick={() => itemClickHandler(item.id)}
                        >
                            <img className={classes.Select__image} src={item.image} alt=""/>
                            {item.text}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
