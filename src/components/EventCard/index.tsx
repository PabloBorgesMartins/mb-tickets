import {
    Container,
    Content,
} from './styles';
import { IFestivity } from '../../interfaces/festivity';

interface ICardProps {
    data: IFestivity;
}

export function EventCard({ data }: ICardProps) {
    return (
        <Container>
            <img
                src={data.image}
                alt={data.title + "imagem"}
            />
            <Content>
                <h1>
                    {data.title}
                </h1>
                <p>
                    {data.description}
                </p>
                <span>
                    {data.date}
                </span>
                <button>
                    COMPRAR
                </button>
            </Content>
        </Container >
    )
}