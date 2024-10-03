const ReservationList = ({ reservations }) => (
    <div className="p-4">
        {reservations.map((reservation) => (
            <div key={reservation.id} className="border p-4 mb-4">
                <h2 className="text-xl">{reservation.roomType}</h2>
                {/* Mostrar otros detalles de la reserva */}
            </div>
        ))}
    </div>
);

export default ReservationList;
