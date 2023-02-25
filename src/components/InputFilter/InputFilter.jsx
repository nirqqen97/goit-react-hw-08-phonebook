import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "redux/Contacts/Contacts.selector";
import { usersSearchAction } from "redux/Contacts/Contacts.slice";
import {Label } from "./InputFilter.styled";
import TextField from '@mui/material/TextField';

export const InputFilter = () => {
    const filter = useSelector(selectFilters);
    const dispatch = useDispatch()
 
        const handeInput =  ({target, }) => {
            dispatch(usersSearchAction(target.value))}
 return ( 
         <Label>
             <TextField
             variant="filled" 
             label="Find contacts by name" 
             onInput={handeInput}
             pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
             value ={filter}/>
         </Label>)
}

InputFilter.propTypes = {
    addFilter: PropTypes.func
}