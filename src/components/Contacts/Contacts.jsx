import { useSelector } from "react-redux";
import { selectFilters } from "redux/Contacts/Contacts.selector";
import { useGetContactsQuery } from "redux/rtk-contacts/rtk-contacts.api";
import { ContactItem } from "../ContactItem/ContactItem";
import { FormList } from "./Contacts.styled";


export const Contacts = ({deleteFromContacts}) =>{
  const {data}= useGetContactsQuery();
  console.log('data: ', data);
  const filter = useSelector(selectFilters)
  const contactsFilter = () => {
    const filtered = data.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()));
    return filtered;
  };
  
    return <FormList>
        {contactsFilter().map(c =>{
            return (<ContactItem key={c.id} c = {c} deleteFromContacts = {deleteFromContacts}/>)
        })}
    </FormList>
}

