import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing, selectToken } from "redux/Auth/auth.selector"

export const PrivateRoute = ({element, redirectTo = '/'}) =>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isRefreshing = useSelector(selectIsRefreshing)
    const token = useSelector(selectToken)
    const shouldRedirect = !isRefreshing && !isLoggedIn && !token
    return shouldRedirect ? <Navigate to={redirectTo}/> : element

}