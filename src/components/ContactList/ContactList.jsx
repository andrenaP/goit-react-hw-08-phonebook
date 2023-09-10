import PropTypes from 'prop-types';
import './ContactList.css';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';

import { getVisibleContacts } from 'redux/contact/contact-selector';

import { selectContactsList } from 'redux/contact/selectors';

import { getfilterValue } from 'redux/contact/filterSlice';

const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(getfilterValue);
  const visibleContacts = getVisibleContacts({ filter, contacts });

  return (
    <>
      <ul className="ListOfNames">
        {visibleContacts && (
          <>
            {visibleContacts.length === 0 && 'Nothing found'}
            {visibleContacts.map(contacts => {
              return <ContactItem key={contacts.id} {...contacts} />;
            })}
          </>
        )}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteFunc: PropTypes.func,
};
