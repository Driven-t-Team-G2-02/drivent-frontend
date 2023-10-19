import { Typography } from "@mui/material";
import styled from 'styled-components';
import ErrorMessage from "./ErrorMessage";
import useEnrollment from "../../hooks/api/useEnrollment";


export default function Payment() {
  const { enrollment, enrollmentError } = useEnrollment();

  return (
    <>
      <StyledTypography variant="h4">Suas Informações</StyledTypography>
      {enrollmentError ? (
        <ErrorMessage>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</ErrorMessage>
      ) : (
        <span>Resto do fluxo</span>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;