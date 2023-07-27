import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    mobile: false,
    openMobile: false,
} as {
    mobile: boolean,
    openMobile: boolean
}


const MenuSlice = createSlice({
    initialState,
    name: "MenuSlice",
    reducers: {
        setMobile(state, payload: PayloadAction<boolean>) {
            state.mobile = payload.payload
        },
        setMenuMobile(state, payload: PayloadAction<boolean>) {
            state.openMobile = payload.payload
        },
    }
})

export const { setMobile, setMenuMobile } = MenuSlice.actions

export default MenuSlice.reducer