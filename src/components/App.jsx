import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Form } from "./Form/Form";
import {Contacts } from "./Contacts/Contacts";
import {InputFilter} from "./InputFilter/InputFilter";
import {Container,Title} from "./App.styled";
import { selectFilters, } from "redux/Contacts/Contacts.selector";
import { usersSearchAction,} from "redux/Contacts/Contacts.slice";
import { useFetchContactsQuery} from "redux/rtk-contacts/rtk-contacts.api";
import { Header } from "./Header/Header";
import Login from "./Login/Login";
import { Register1 } from "./Register/Register";
import { useEffect } from "react";
import { refreshUser } from "redux/Auth/auth.operaiton";



export const App = () =>{
  const {isLoading, isSuccess}= useFetchContactsQuery()

  const filter = useSelector(selectFilters)

  const dispatch = useDispatch()
  
  const addFilter = (value) => {
    dispatch(usersSearchAction(value))
  }
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Header/>
    <Container>
      <Routes>
        <Route path="/" element={<Login/>}/>
        
        <Route path="contacts" element={<>  <Form/>
          <Title>Contacts</Title>
          <InputFilter onInput={addFilter} value={filter}/>
          {isLoading && <Title>Loading...</Title>}
          {isSuccess &&  <Contacts/>}</>}/>
          <Route path="register" element = {<Register1/>}/>
      </Routes>
    </Container>
    </BrowserRouter>
  )
}


// {isSuccess &&  <Contacts/>}
