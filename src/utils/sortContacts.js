export const sortContacts = (contacts) => {
  return contacts.slice().sort((a,b)=>a.name.localeCompare(b.name));
};