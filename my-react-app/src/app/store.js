import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/contacts/contactsSlice';
import tagsReducer from '../features/tags/tagsSlice';
import { contactsApi } from '../features/contacts/contactsAPI';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        tags: tagsReducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactsApi.middleware),
});