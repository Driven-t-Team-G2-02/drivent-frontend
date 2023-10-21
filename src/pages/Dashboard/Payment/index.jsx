import PaymentInfo from "../../../components/Dashboard/PaymentInfo";
import PaymentDetails from "../../../components/Dashboard/PaymentDetails";
import { getUserTicket } from "../../../services/ticketApi";
import { useEffect, useState } from "react";
import useTicket from "../../../hooks/api/useTicket";

export default function Payment() {
  const [ticketReserved, setTicketReserved] = useState(false)
  const [ticketPaid, setTicketPaid] = useState(false)
  const { getUserTicket } = useTicket()

  return (
    <>
      {ticketReserved
        ?
        (
          <PaymentDetails
            ticketReserved={ticketReserved}
            setTicketReserved={setTicketReserved}
            ticketPaid={ticketPaid}
            setTicketPaid={setTicketPaid}
          />
        )
        :
        (
          <PaymentInfo
            ticketReserved={ticketReserved}
            setTicketReserved={setTicketReserved}
          />
        )
      }
    </>
  );
}