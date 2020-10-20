import React, {useState} from 'react'
import classes from './Layout.module.css'
import {Button} from "../components/UI/Button/Button"
import Popup from "../components/Popup/Popup"

export const Layout = () => {
    const [popup, setPopup] = useState(false)

    const popupClose = () => setPopup(false)

    return (
        <div className={classes.Layout}>
            <Button
                text='Открыть модалку'
                onClick={() => setPopup(true)}
            />
            {
                popup
                    ? <Popup
                        onClose={popupClose}
                    />
                    : null
            }
        </div>
    )
}


