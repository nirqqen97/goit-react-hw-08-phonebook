import { useSelector } from "react-redux";
// import { refreshUser } from "redux/Auth/auth.operaiton";
import { selectFilters } from "redux/Contacts/Contacts.selector";
import { useFetchContactsQuery } from "redux/rtk-contacts/rtk-contacts.api";
import { ContactItem } from "../ContactItem/ContactItem";
import { FormList } from "./Contacts.styled";

 const Contacts = ({deleteFromContacts}) =>{
  // const dispatch = useDispatch()
  // const {data} = dispatch(refreshUser) 
  const {data}= useFetchContactsQuery();
  const filter = useSelector(selectFilters)
  const contactsFilter = () => {
    const filtered = data?.filter(contact =>  
      contact?.name?.toLowerCase().trim().includes(filter?.toLowerCase().trim()));
    return filtered;
  };
    return <FormList>
        {contactsFilter()?.map(c =>{
            return (<ContactItem key={c.id} c = {c} deleteFromContacts = {deleteFromContacts}/>)
        })}
    </FormList>
}

export default Contacts;


