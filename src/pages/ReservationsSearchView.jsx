import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import RoomList from '../components/RoomList';
import axios from 'axios';

const ReservationsSearchView = () => {
    const [rooms, setRooms] = useState([]);

    const handleSearch = async (criteria) => {
        try {
            const response = await axios.get('/api/rooms', { params: criteria });
            setRooms(response.data);
        } catch (error) {
            alert('Error al buscar habitaciones');
        }
    };

    return (
        <div>
            <SearchForm onSearch={handleSearch} />
            <RoomList rooms={rooms} />
        </div>
    );
};

export default ReservationsSearchView;
