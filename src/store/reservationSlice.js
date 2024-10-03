import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReservations = createAsyncThunk(
    'reservations/fetchReservations',
    async () => {
        const response = await axios.get('/api/reservations');
        return response.data;
    }
);

const reservationsSlice = createSlice({
    name: 'reservations',
    initialState: {
        reservations: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReservations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReservations.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reservations = action.payload;
            })
            .addCase(fetchReservations.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default reservationsSlice.reducer;
