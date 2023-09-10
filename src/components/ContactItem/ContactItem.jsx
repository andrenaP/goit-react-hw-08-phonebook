import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contact/operations';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} successfully deleted from contacts`
        );
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });
  };

  return (
    <li key={id}>
      <span className="name">{name}</span>
      <span className="number">{number}</span>
      <button
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
