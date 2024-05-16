import { loadContacts } from '../store/localStorage';

const sampleContacts = [
  {
    id: 123456,
    name: "Adam Abacki",
    phone: "789-456-123",
    // email: "adam.abacki@gmail.com",
  },
  {
    id: 234567,
    name: "Beata Biedna",
    phone: "111-111-111",
    // email: "beata.biedna@gmail.com",
  },
  {
    id: 345678,
    name: "Celina Cwynar",
    phone: "654-654-654",
    // email: "celinka@gmail.com",
  },
  {
    id: 456789,
    name: "Dominik Dubrownik",
    phone: "887-779-991",
    // email: "dominodu@gmail.com",
  },
  {
    id: 567891,
    name: "Emilia Euforia",
    phone: "159-482-675",
    // email: "eeeuforia@gmail.com",
  },
  {
    id: 789123,
    name: "Feliks Fajny",
    phone: "787-565-121",
    // email: "felix@gmail.com",
  },
  {
    id: 678912,
    name: "Gerard Grubodziób",
    phone: "885-996-774",
    // email: "gruby_gerard@gmail.com",
  },
];

export const filterInitialState = "";

export const contactsInitialState = loadContacts() || sampleContacts;
