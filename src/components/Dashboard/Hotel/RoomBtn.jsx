import styled from "styled-components";
import { BsPerson, BsPersonFill } from 'react-icons/bs';

export default function RoomBtn({ room, selectedRoom, setSelectedRoom }) {
    return (
        <RoomButton
            disabled={room.id === selectedRoom}
            onClick={() => setSelectedRoom(room.id)}
            key={room.id}
        >
            <Name>{room.name}</Name>
            <div>
                {
                    room.Booking.map((booking, i) => (
                        booking.userId !== 0 ?
                            <BsPersonFill size={27} key={i} ></BsPersonFill>
                            :
                            <BsPerson size={27} key={i}></BsPerson>
                    ))
                }
            </div>
        </RoomButton>
    )
}

const RoomButton = styled.button`
  width: 190px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 11px;

  border-radius: 10px;
  border: 1px solid #CECECE;
`;

const Name = styled.h1`
  font-size: 20px;
  margin: 10px 0px;
`;