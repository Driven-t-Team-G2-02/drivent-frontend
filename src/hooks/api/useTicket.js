import useAsync from '../useAsync';
import useToken from '../useToken';

import * as createTicketToPay from '../../services/createTicketToPay';

export default function useTicket() {

    const token = useToken();

    const {
        loading: TicketLoading,
        error: TicketError,
        act: createTicket,
    } = useAsync((data) => createTicketToPay.createTicket(data, token), true);

    return {
        TicketLoading,
        TicketError,
        createTicket,
    };
}
