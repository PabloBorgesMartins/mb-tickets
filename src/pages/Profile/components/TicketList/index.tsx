import {
    Container,
    Ticket
} from './styles';
import { useAuth } from '../../../../hooks/auth';


export function TicketList() {

    const { user } = useAuth();
    let r = (Math.random() + 1).toString(36).substring(0, 100);
    console.log("random", r);

    return (
        <Container>
            {
                user.purchases.map((item, index) => {
                    return (
                        <Ticket key={item.code}>
                            <h1>{item.festivity.title}</h1>
                            <p>Código: {item.code}</p>
                        </Ticket>
                    )
                })
            }
        </Container>
    )
}