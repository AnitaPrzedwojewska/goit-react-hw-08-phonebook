import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./constants";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
    // editContact: {
    //   reducer(state, action) {
    //     for (const contact of state) {
    //       if (contact.id === action.payload.id) {
    //         state.splice(index, 1);
    //         break;
    //       }
    //     }
    //   },
    //   prepare(renewContact) {
    //     return {
    //       payload: {
    //         name: renewContact.name,
    //         phone: renewContact.phone,
    //         id: nanoid()
    //       },
    //     };
    //   },
    // },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

