import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useState } from 'react';
import { connect } from 'react-redux';
// import { addContact } from '../../redux/contacts/contacts-actions';
import { contactsOperations } from '../../redux/contacts';
import { Form } from './ContactForm.styled';
function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
          value={name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor={numberInputId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  );
}
ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(contactsOperations.addContact(value)),
});
export default connect(null, mapDispatchToProps)(ContactForm);
