import useAsync from '../useAsync';
import useToken from '../useToken';

import * as createTicketToPay from '../../services/createTicketToPay';
import * as getTicket from '../../services/ticketApi'

export default function useTicket() {

    const token = useToken();

    const {
        loading: TicketLoading,
        error: TicketError,
        act: createTicket,
    } = useAsync((data) => createTicketToPay.createTicket(data, token), true);

    const {
        loading: GetUserTicketLoading,
        error: GetUserTicketError,
        act: getUserTicket
    } = useAsync(() => getTicket.getUserTicket(token), true)

    return {
        TicketLoading,
        TicketError,
        createTicket,
        GetUserTicketLoading,
        GetUserTicketError,
        getUserTicket
    };
}

/* export default function getUserTicket() {

} */
