import css from './ContactList.module.css';
import Contact from '@/components/Contact/index.js';
import { useSelector } from 'react-redux';

const selectFilteredContacts = (state) => {
  const contacts = state.contacts.items;
  const filter = state.filters.name.toLowerCase();

  if (!filter) {
    return contacts;
  }

  return contacts.filter((contact) => contact.name.toLowerCase().includes(filter));
};

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
