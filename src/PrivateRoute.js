import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/Auth/auth.selector"

export const PrivateRoute = ({element, redirectTo = '/'}) =>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isRefreshing = useSelector(selectIsRefreshing)
    const shouldRedirect = !isLoggedIn && !isRefreshing
    console.log('isLoggedIn: ', isLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo}/> : element

}