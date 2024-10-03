import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [criteria, setCriteria] = useState({
        checkInDate: '',
        checkOutDate: '',
        guests: 1,
        roomType: '',
    });

    const handleChange = (field) => (e) =>
        setCriteria({ ...criteria, [field]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(criteria);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 flex flex-col space-y-4">
            {/* Campos de entrada */}
            <input type="date" value={criteria.checkInDate} onChange={handleChange('checkInDate')} required />
            <input type="date" value={criteria.checkOutDate} onChange={handleChange('checkOutDate')} required />
            <input type="number" value={criteria.guests} onChange={handleChange('guests')} min="1" required />
            <input type="text" value={criteria.roomType} onChange={handleChange('roomType')} placeholder="Tipo de habitación (opcional)" />
            <button type="submit" className="bg-blue-500 text-white p-2">Buscar</button>
        </form>
    );
};

export default SearchForm;
