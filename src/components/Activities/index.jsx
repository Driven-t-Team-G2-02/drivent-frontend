import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { ContentWrapper } from './ContentWrapper';
import DayButton from './DayButton';
import { useState } from 'react';
import ActivityComp from './ActivityComp';

export default function ActivitiesTab() {
  const [selectedDay,setSelectedDay] = useState(null)

  function dayControll(actualId){
    setSelectedDay(actualId)
  }

  return(
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <ContentWrapper>
        <DayArea>
          <DayButton id={0} func={dayControll} selected={selectedDay}>Sexta, 22/10</DayButton>
          <DayButton id={1} func={dayControll} selected={selectedDay}>Sábado, 23/10</DayButton>
          <DayButton id={2} func={dayControll} selected={selectedDay}>Domingo, 24/10</DayButton>
        </DayArea>
        <TableArea>
          <RoomName>
            <p>Auditorio Principal</p>
            <p>Auditorio Lateral</p>
            <p>Sala de Workshop</p>
          </RoomName>
          <Table>
            <Sections>
              <ActivityComp remaining={10} day={0} selected={selectedDay} duration={1}/>
              <ActivityComp remaining={8} day={0} selected={selectedDay} duration={1}/>
            </Sections>
            <Sections>
              <ActivityComp remaining={0} day={0} selected={selectedDay} duration={2}/>
            </Sections>
            <Sections>
              <ActivityComp remaining={9} day={2} selected={selectedDay} duration={1}/>
            </Sections>
          </Table>
        </TableArea>
      </ContentWrapper>
    </>
  )
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const DayArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  margin-bottom: 60px;
`;

const TableArea = styled.div`
  width: 100%;
  height: 100%;
`;

const RoomName = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  color: #7B7B7B;
`;

const Table = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 8px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #D7D7D7;
  gap: 8px;
`;