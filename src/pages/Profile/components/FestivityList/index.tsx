import {
    Container
} from './styles';
import { EventCard } from '../../../../components/EventCard';
import { useAuth } from '../../../../hooks/auth';

export function FestivityList() {

    const { user } = useAuth();

    return (
        <Container>
            {
                user.myFestivities.map((item) => {
                    return (
                        <EventCard key={item.id.toString()} data={item} />
                    )
                })
            }
        </Container>
    )
}