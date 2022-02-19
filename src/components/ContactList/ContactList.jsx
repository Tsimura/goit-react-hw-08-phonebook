import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem';
import { contactsSelectors } from '../../redux/contacts';
import { ContactListWrapper } from './ContactList.styled';
export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  return (
    <ContactListWrapper>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactListItem id={id} name={name} number={number} />
          </li>
        ))
      ) : (
        <p>You don't have contacts yet...</p>
      )}
    </ContactListWrapper>
  );
}
ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
