import React from 'react'

const PrivateRoute = () => {

    return (
        <Route path={path} exact={exact}>
            {user ?

                <div className="container">
                    <Navbar />
                    <div className="grid-main">
                        {children}
                    </div>
                    <Footer />
                </div>
                :
                user.role_id !== '5' ?
                    <Redirect to='/' />
                    :
                    <Redirect to='/raportit' />
            }
        </Route >
    )
}

export default PrivateRoute
