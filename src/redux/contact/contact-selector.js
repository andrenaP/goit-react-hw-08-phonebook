export const getVisibleContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  if (contacts) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
};
