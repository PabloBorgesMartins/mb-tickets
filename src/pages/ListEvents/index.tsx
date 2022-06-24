import { useEffect, useState } from 'react';
import { Container } from './styles';
import { EventCard } from '../../components/EventCard';
import { api } from '../../services/api';
import { IFestivity } from '../../interfaces/festivity';

export function ListEvents() {

    const [festivities, setFestivities] = useState<IFestivity[]>([])

    const loadData = async () => {
        let response = await api.get('festivities');
        setFestivities(response.data.festivities);
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <Container>
            {
                festivities.map((item) => {
                    return (
                        <EventCard key={item.id.toString()} data={item} />
                    )
                })
            }
        </Container>
    )
}