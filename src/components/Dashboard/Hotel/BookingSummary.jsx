import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import useHotelRooms from '../../../hooks/api/useHotelRooms';
import { ActionBtn, Details, Name, Information, Data, Title, HotelContainer } from '../../../pages/Dashboard/Hotel';

export default function BookingSummary ({ userBooking }) {
  const { hotelWithRooms } = useHotelRooms(userBooking.Room.hotelId);

  const roomCapacity = userBooking.Room.capacity === 3 ? 'Triple' : userBooking.Room.capacity === 2 ? 'Double' : 'Single' ;
  const [room, setRoom] = useState();
  const [roommates, setRoomates] = useState();

  useEffect(() => {
    if(hotelWithRooms) {
      const filteredRoom = hotelWithRooms?.Rooms.filter(room => room.id === userBooking.Room.id)[0];
      setRoom(filteredRoom);

      const otherBookingsCount = filteredRoom.Booking.length - 1;
      const roomatesCount = otherBookingsCount === -1 ? 0 : otherBookingsCount;
      setRoomates(roomatesCount);
    }

  }, [hotelWithRooms]);

  return (
    hotelWithRooms && room ?
    <>
      <Information>Você já escolheu seu quarto:</Information>
      <HotelContainer>
        <Summary disabled={true}>
          <img src={hotelWithRooms.image} alt={hotelWithRooms.name} />
          <Name>{hotelWithRooms.name}</Name>
          <Details>
            <div>
              <Title>Quarto Reservado</Title>
              <Data>{`${room.name} (${roomCapacity})`}</Data>
            </div>
            <div>
              <Title>Pessoas no seu quarto</Title>
              <Data>{`Você e mais ${roommates}`}</Data>
            </div>
          </Details>
        </Summary>
      </HotelContainer>
      <ActionBtn>TROCAR DE QUARTO</ActionBtn>
    </>
    : <ErrorMessage>Carregando...</ErrorMessage>
  );
}

const Summary = styled.button`
  width: 196px;
  height: 264px;
  padding: 16px 14px;
  border: none;
  outline: none;
  border-radius: 10px;

  background-color: #EBEBEB;
  
  &:disabled {
    background-color: #FFEED2;
  };

  color: #343434;
  font-family: Roboto;
  font-style: normal;
  line-height: normal;
  font-weight: 400 !important;

  text-align: start;
  
  img {
    width: 100%;
    height: 109px;
    border-radius: 5px;
  }
`;
