import { createSlice } from '@reduxjs/toolkit';

export const tagsSlice = createSlice({
    name: 'tags',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setTags: (state, action) => {
            state.list = action.payload;
        },
    },
});

export const { setTags } = tagsSlice.actions;
export default tagsSlice.reducer;