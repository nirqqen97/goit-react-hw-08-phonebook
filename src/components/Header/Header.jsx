import { Flex, NavLinks } from "./Header.styled"


export const Header = () =>{
   return <Flex>
             <NavLinks to='contacts'>Contacts</NavLinks>
             <NavLinks to=''>Sign In</NavLinks>
    </Flex>
}