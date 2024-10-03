import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservationSlice';

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
    },
});
