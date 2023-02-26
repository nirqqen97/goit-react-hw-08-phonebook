
import { useDeleteContactsMutation } from "redux/rtk-contacts/rtk-contacts.api";
import { Item,Name,Phone,Btn } from "./ContactItem.styled"

export const ContactItem = ({c}) =>{
    const [triggerDelete] = useDeleteContactsMutation()
    
    function  deleteFromContacts (contactToDelete) {
        triggerDelete(contactToDelete.id)
      }
    function handleClick(e) {
        deleteFromContacts(c)
    }
    return <Item>
        <Name>{c.name}:</Name>
        <Phone>{c.number}</Phone>
        <Btn variant="contained" type="button" onClick={handleClick}>Delete</Btn>
        </Item>
}
