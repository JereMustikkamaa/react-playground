import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ path, exact, children }) => {

    return (
        <Route path={path} exact={exact}>
            {true ?
                <>
                    {children}
                </>
                :
                <Redirect to='/' />
            }
        </Route >
    )
}

export default PrivateRoute
