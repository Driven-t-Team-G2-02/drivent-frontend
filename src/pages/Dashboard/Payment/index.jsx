import PaymentInfo from "../../../components/Dashboard/PaymentInfo";
import PaymentDetails from "../../../components/Dashboard/PaymentDetails";
import { getUserTicket } from "../../../services/ticketApi";
import { useEffect, useState } from "react";

export default function Payment() {
  const [ticketReserved, setTicketReserved] = useState(false)

  return (
    <>
      {ticketReserved
        ?
        (
          <PaymentDetails
            ticketReserved={ticketReserved}
            setTicketReserved={setTicketReserved}
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