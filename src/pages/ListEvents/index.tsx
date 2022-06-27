import { useEffect, useState } from 'react';
import { Container } from './styles';
import { EventCard } from '../../components/EventCard';
import { IFestivity, getFestivities } from '../../interfaces/festivity';
import Loader from '../../components/Loader';

export function ListEvents() {

    const [festivities, setFestivities] = useState<IFestivity[]>([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        setLoading(true);
        try {
            let response = await getFestivities();
            setFestivities(response.festivities);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    if (loading) {
        return (<Loader />);
    }

    return (
        <Container>
            {
                festivities.map((item) => {
                    return (
                        <EventCard key={item.id.toString()} data={item} isBuyable />
                    )
                })
            }
        </Container>
    )
}