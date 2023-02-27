import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Button } from "@mui/material"

export const Flex = styled.div`
    display:flex;
    flex-direction: row-reverse`
export const NavLinks = styled(NavLink)`
    margin : 20px;
    color:blue;
    text-decoration:none`

export const Logout = styled(Button)`
    margin : 20px;`
