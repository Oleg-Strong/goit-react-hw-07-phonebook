import { toast } from 'react-toastify';

export const getFilteredContacts = (name, contacts) => {
  const normalizedName = name.toLowerCase();
  return contacts
    .filter(contact => contact.name.toLowerCase().includes(normalizedName))
    .sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );
};

export const checkContactBeforeAdding = (contacts, addedContact) => {
  const { name, number } = addedContact;
  const normalazetName = name.toLowerCase().split(' ').join('');
  const normalazetNumber = number.split('-').join('');
  const existingName = contacts.some(
    ({ name }) => name.toLowerCase().split(' ').join('') === normalazetName
  );
  const existingNumber = contacts.some(
    ({ number }) => number.split('-').join('') === normalazetNumber
  );
  if (existingName || existingNumber) {
    toast.warn(`${existingNumber ? number : name} is already in contacts!!!`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    });
    return;
  }

  return addedContact;
};
