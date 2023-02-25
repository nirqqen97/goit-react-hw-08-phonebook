import { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import {FormWrap,SubmitBtn, Label} from "./Form.styled";
import { useAddUserMutation, useGetContactsQuery } from "redux/rtk-contacts/rtk-contacts.api";
import TextField from '@mui/material/TextField';

export const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const {data}= useGetContactsQuery()
    const [addUser] = useAddUserMutation()

    const handleNameChange = (e) =>{
        setName(e.currentTarget.value)
    }
    const handlePhoneChange = (e) =>{
        setPhone(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(name,phone);
        setPhone("");
        setName('');
        e.target.reset()
        }
       
         
  const checkIsInContacts = (value) => {
    const checked = data.find(contact => contact.name === value) !== undefined;
    return checked
  }
  const addContact = (name, phone) => {
    if (checkIsInContacts(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    addUser({id:shortid.generate(),name,phone}); 
  };

        
        return(
            <FormWrap autoComplete="off" onSubmit={handleSubmit}>
            <Label>
                <TextField type={"text"} 
                       name ={"name"}
                       onChange ={handleNameChange}
                       pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
                       title = {"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}
                       value = {name}
                       id="filled-basic" 
                       label="Name" 
                       variant="filled"
                       required/>
                       
            </Label>
            <Label>
                <TextField type={"text"} 
                       name ={"telephone"}
                       onChange ={handlePhoneChange}
                       pattern = {"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"}
                       value = {phone}
                       id="filled-basic" 
                       label="Phone" 
                       variant="filled"
                       title = {"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}/>
                       
            </Label>
            <SubmitBtn variant="contained">Submit</SubmitBtn>
        </FormWrap>
        )
    
}
Form.propTypes = {
    addContact: PropTypes.func,
}