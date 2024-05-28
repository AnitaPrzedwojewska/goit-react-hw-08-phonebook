import { createSlice } from "@reduxjs/toolkit";

import { isPendingAction, isRejectAction } from "../../utils/isFetchAction";
import { initialState } from "./initialState";
import { addContact, deleteContact, fetchContacts } from "./operation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);

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

export const contactsReducer = contactsSlice.reducer;
