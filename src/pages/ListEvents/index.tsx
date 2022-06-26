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

    const getEvent = async () => {
        let response = await api.get('festivities/1');
        // let response = await api.get('festivities/Cidade');
        console.log("RESPOSTA SEARCH", response)
    }

    useEffect(() => {
        loadData();
        getEvent();
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