import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ImUserMinus } from 'react-icons/im';
import { contactsOperations } from '../../redux/contacts';
const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      {name}: {number}
      <button
        type="button"
        onClick={() => dispatch(contactsOperations.deleteContact(id))}
      >
        <ImUserMinus size={18}></ImUserMinus>
      </button>
    </>
  );
};
ContactListItem.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactListItem;
