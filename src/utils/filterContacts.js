export const filterContacts = (contacts, filter) => {
  return filter.trim() === ""
    ? contacts
    : contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
}