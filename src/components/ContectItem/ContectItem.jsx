import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operetion';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      <p className={css.contactName}>{name}</p>
      <p className={css.contacNumber}>{number}</p>
      <button
        className={css.contactBtn}
        type="buttom"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;

ContactItem.prototype = {
  phonebook: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
