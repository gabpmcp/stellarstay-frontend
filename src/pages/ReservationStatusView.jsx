import { useEffect } from 'react';
import ReservationList from '../components/ReservationList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../store/reservationSlice';

const ReservationStatusView = () => {
    const dispatch = useDispatch();
    const { reservations, status } = useSelector((state) => state.reservations);

    useEffect(() => {
        dispatch(fetchReservations());
    }, [dispatch]);

    if (status === 'loading') return <p>Cargando reservas...</p>;
    if (status === 'failed') return <p>Error al cargar reservas</p>;

    return <ReservationList reservations={reservations} />;
};

export default ReservationStatusView;
