import RoomItem from './RoomItem';

const RoomList = ({ rooms }) => (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
            <RoomItem key={room.id} room={room} />
        ))}
    </div>
);

export default RoomList;
