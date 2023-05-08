import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from './filter-slice'
export const store = configureStore({
    reducer: {
        filters: filtersReducer,
    }
})
