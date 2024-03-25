import { createSlice } from '@reduxjs/toolkit'


export const langSelector = createSlice({
    name: 'selector',
    initialState: {
        value: "en",
    },
    reducers: {
        setCurrentLang: (state, action) => {
            state.value = action.payload
        },
    },
})


// Action creators are generated for each case reducer function
export const { setCurrentLang } = langSelector.actions


export default langSelector.reducer
