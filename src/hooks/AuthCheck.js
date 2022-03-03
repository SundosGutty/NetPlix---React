import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import { userService } from "../services/user.service";
// import { useDispatch, useSelector } from "react-redux";
// import { loadUser } from '../store/actions/use/rActions'



export const ProtectedRoute = ({ component: Component, ...rest }) => {
    // const [isLoading, setIsLoading] = useState(true)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(async () => {
        // const isLoggedIn = await userService.isAuth()
        console.log('async', userService.isAuth())
        setIsAuth(true)
        // setIsLoading(!isLoading)
    }, [isAuth])

    useEffect(() => {
        console.log('not - async', userService.isAuth())
        // const isLoggedIn = await userService.isAuth()
        setIsAuth(userService.isAuth())
    }, [])

    // if (!isLoading)
    return (
        <Route render={
            props => {
                if (isAuth) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={'/'} />
                }
            }
        } />
    )
}


