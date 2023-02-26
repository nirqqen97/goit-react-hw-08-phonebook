import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './Contacts.init-state.slice';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
     usersSearchAction: (state,{payload}) => {
          
          state.search = payload
          
      },
  },

});

export const {usersSearchAction} = contactsSlice.actions;


export const contactsReducer = contactsSlice.reducer;

