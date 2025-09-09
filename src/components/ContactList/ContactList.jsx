import css from './ContactList.module.css';
import Contact from '@/components/Contact/index.js';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '@/redux/contactsSlice';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.container}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} />
      ))}
    </div>
  );
}
