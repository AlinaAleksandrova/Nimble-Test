import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setContacts: (state, action) => {
            state.list = action.payload;
        },
    },
});

export const { setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;