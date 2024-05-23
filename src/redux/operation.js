import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://664f601eec9b4a4a602e8e16.mockapi.io/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({id, createdAt, name, phone}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", {
        id,
        createdAt,
        name,
        phone,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const editContact = createAsyncThunk(
//   "contacts/editContact",
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.put(`/contacts/${contact.id}`, {
//         name: contact.name, phone: contact.phone
//       });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
