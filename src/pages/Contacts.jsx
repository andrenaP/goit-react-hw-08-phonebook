import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Section from 'components/Section';
import Filter from 'components/Filter';
export const Contacts = () => {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default Contacts;
