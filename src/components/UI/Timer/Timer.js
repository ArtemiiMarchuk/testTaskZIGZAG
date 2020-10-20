import React, {useState, useEffect} from 'react'
import classes from './Timer.module.scss'
import timerImage from '../../../assets/images/timer.svg'

export const Timer = ({time}) => {
    const [isActive, setIsActive] = useState(true)
    const [seconds, setSeconds] = useState(time * 60)

    useEffect(() => {
        let interval = null

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds - 1)
            }, 1000)
        }

        if (seconds === 0) {
            setIsActive(false)
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isActive, seconds])

    const formatTwoNumeral = number => {
        return number === 0 ? '00' : number < 10 ? `0${number}` : number
    }

    const correctFormatTimer = time => {
        const seconds = time % 60
        const minutes = Math.floor(time / 60 % 60)
        const hours = Math.floor(time / 60 / 60 % 60)

        return `${formatTwoNumeral(hours)}:${formatTwoNumeral(minutes)}:${formatTwoNumeral(seconds)}`
    }


    return (
        <div className={classes.Timer}>
            <img className={classes.Timer__image} src={timerImage} alt="timer"/>
            <span className={classes.Timer__text}>{correctFormatTimer(seconds)}</span>
        </div>
    )
}
