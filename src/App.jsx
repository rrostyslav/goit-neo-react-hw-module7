import ContactForm from '@/components/ContactForm';
import SearchBox from '@/components/SearchBox';
import ContactList from '@/components/ContactList';
import useSearch from '@/hooks/useSearch';
import usePersistedState from '@/hooks/usePersistedState';
import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = usePersistedState('contacts', []);

  const {
    isSearchMode,
    searchQuery,
    setSearchQuery,
    filtered: filteredContacts,
  } = useSearch(contacts, (item) => item.name);

  const handleAddContact = (contact) => {
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={searchQuery} onSearch={setSearchQuery} />
      <ContactList contacts={isSearchMode ? filteredContacts : contacts} onDelete={handleDelete} />
    </div>
  );
}
