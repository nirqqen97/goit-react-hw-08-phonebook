import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/Auth/auth.selector"

export const RestrictedRouse = ({element, redirectTo = '/'}) =>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    console.log('isLoggedIn: ', isLoggedIn);
    return isLoggedIn ? <Navigate to="contacts"/> : element

}