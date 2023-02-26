import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './Contacts.init-state.slice';

export const contactsSlice = createSlice({
  name: 'filter',
  initialState: contactsInitState,
  reducers: {
     usersSearchAction: (state,{payload}) => {
          state.search = payload
      },
  },

});

export const {usersSearchAction} = contactsSlice.actions;


// export const contactsReducer = contactsSlice.reducer;

