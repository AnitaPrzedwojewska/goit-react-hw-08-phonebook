import { statusFilters } from "./constants";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

export const contactsReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return [...state, action.payload];
    case "contacts/deleteContact":
      return state.filter((contact) => contact.id !== action.payload);
    // case "contacts/editContact":
    //   return state.map((contact) => {
    //     if (task.id !== action.payload) {
    //       return contact;
    //     }
    //     return { ...contact, completed: !task.completed };
    //   });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
