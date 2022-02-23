// import PropTypes from 'prop-types';
import shortid from 'shortid';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { Form } from './ContactForm.styled';
export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const allContacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();

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
  const duplicateNameChecking = name =>
    allContacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

  const duplicateNumberChecking = number =>
    allContacts.find(contact => contact.number === number);

  const handleSubmit = event => {
    event.preventDefault();
    if (duplicateNameChecking(name)) {
      toast.error(`Sorry, but user ${name} name is already in contacts.`);
    } else if (duplicateNumberChecking(number)) {
      toast.error(
        `Sorry, but user with ${number} phone is already in contacts.`
      );
    } else
      dispatch(contactsOperations.addContact({ name, number })) &&
        toast.success(
          `User ${name} with phone number ${number} has been successfully added to the phone book.`
        );
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
