  
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
    const { message, error, show } = useSelector(state => state.notification)
    if (show) {
        if (error) {
            return (
                <div className="notification failure">{message}</div>
            )
        } else {
            return (
                <div className="notification success">{message}</div>
            )
        }
    } else return null
}

export default Notification