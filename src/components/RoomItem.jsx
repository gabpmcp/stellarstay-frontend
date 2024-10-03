import { useState } from 'react';
import BreakdownModal from './BreakdownModal';
import axios from 'axios';

const RoomItem = ({ room }) => {
    const [showBreakdown, setShowBreakdown] = useState(false);

    const handleReserve = async () => {
        const confirm = window.confirm('¿Desea proceder con la reserva?');
        if (confirm) {
            // Lógica para reservar
            try {
                await axios.post('/api/reservations', { roomId: room.id });
                alert('Reserva exitosa');
            } catch (error) {
                alert('Error al reservar');
            }
        }
    };

    return (
        <div className="border p-4">
            <h2 className="text-xl">{room.type}</h2>
            {/* Mostrar otros detalles */}
            <button onClick={() => setShowBreakdown(true)} className="bg-gray-500 text-white p-2 m-2">
                Ver Desglose
            </button>
            <button onClick={handleReserve} className="bg-green-500 text-white p-2 m-2">
                Reservar
            </button>
            {showBreakdown && <BreakdownModal breakdown={room.breakdown} onClose={() => setShowBreakdown(false)} />}
        </div>
    );
};

export default RoomItem;
