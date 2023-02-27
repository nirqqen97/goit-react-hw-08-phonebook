import { useDispatch } from "react-redux"
import { logOut } from "redux/Auth/auth.operaiton"
import { Flex, Logout, NavLinks } from "./Header.styled"


export const Header = () =>{
    const dispatch = useDispatch()

    const HandleLogOut = () =>{
        console.log('asd');
        
        dispatch(logOut())
    }
   return <Flex>
       <Logout type="button" onClick={HandleLogOut} variant="contained">Logout</Logout>

             <NavLinks to='contacts'>Contacts</NavLinks>
             <NavLinks to=''>Sign In</NavLinks>
    </Flex>
}