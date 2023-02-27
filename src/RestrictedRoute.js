import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/Auth/auth.selector"

export const RestrictedRouse = ({element, redirectTo = '/'}) =>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    
    return isLoggedIn ? <Navigate to={redirectTo}/> : element

}