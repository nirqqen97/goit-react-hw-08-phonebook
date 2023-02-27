import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/Auth/auth.operaiton"
import { selectData, selectIsLoggedIn } from "redux/Auth/auth.selector"
import { Flex, Logout, Name, NavLinks, Wrap } from "./Header.styled"


export const Header = () =>{
    const dispatch = useDispatch()
    const data = useSelector(selectData)
    const isLogg = useSelector(selectIsLoggedIn)
    console.log('data: ', data);
    const HandleLogOut = () =>{
        console.log('asd');
        
        dispatch(logOut())
    }
   return<Flex> 
       <Wrap>
       {isLogg &&   <Logout type="button" onClick={HandleLogOut} variant="contained">Logout</Logout>}
        {isLogg && <NavLinks to='contacts'>Contacts</NavLinks>}
        {!isLogg &&   <NavLinks to=''>Sign In</NavLinks>}
        </Wrap>
           
             <Name>{data.name}</Name>
    </Flex>
}