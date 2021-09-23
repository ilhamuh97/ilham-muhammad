import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        device: {
            isMobile: window.innerWidth < 768 || window.innerHeight < 480,
            isTablet: window.innerWidth > 767 && window.innerWidth < 1024,
            isDesktop: window.innerWidth > 1023,
            isLargeDesktop: window.innerWidth > 1440,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            scrolled: window.scrollY
        },
    },
    reducers: {
        windowResize: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.device.isMobile = window.innerWidth < 768 || window.innerHeight < 480;
            state.device.isTablet = window.innerWidth > 767 && window.innerWidth < 1024;
            state.device.isDesktop = window.innerWidth > 1023;
            state.device.isLargeDesktop = window.innerWidth > 1440;
            state.device.windowWidth = window.innerWidth;
            state.device.windowHeight = window.innerHeight;
            state.device.scrolled = window.scrollY;
        },
    },
})

// Action creators are generated for each case reducer function
export const { windowResize} = appSlice.actions
export default appSlice.reducer;
