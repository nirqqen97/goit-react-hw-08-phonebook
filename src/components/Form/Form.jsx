import { useState } from "react";
import PropTypes from "prop-types";
import {FormWrap,SubmitBtn, Label} from "./Form.styled";
import { usePostContactsMutation, useFetchContactsQuery } from "redux/rtk-contacts/rtk-contacts.api";
import TextField from '@mui/material/TextField';

export const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const {data}= useFetchContactsQuery()
    const [addUser] = usePostContactsMutation()

    const handleNameChange = (e) =>{
        setName(e.currentTarget.value)
    }
    const handlePhoneChange = (e) =>{
        setNumber(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
          name,
          number
        }
        addContact(contact);
        setNumber("");
        setName('');
        e.target.reset()
        }
       
         
        const checkIsInContacts = (data, value) => {
          const checked = data?.find(contact => contact.name === value) !== undefined;
          return checked
        }
        
  const addContact = (name, number) => {
    if (checkIsInContacts(data, name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    addUser(name,number );
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
                       value = {number}
                       id="filled-basic" 
                       label="Phone" 
                       variant="filled"
                       title = {"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}/>
                       
            </Label>
            <SubmitBtn variant="contained" type="submit">Submit</SubmitBtn>
        </FormWrap>
        )
    
}
Form.propTypes = {
    addContact: PropTypes.func,
}