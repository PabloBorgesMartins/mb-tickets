import {
    Container,
    Content,
    Footer
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
                    {new Intl.DateTimeFormat('pt-BR').format(
                        new Date(data.date)
                    )}
                </span>
                <p>
                    {data.street},{" "}{data.number},{" "}{data.district}
                </p>
                <p>
                    {data.city}-{data.state}
                </p>
                <Footer>
                    <p>
                        Valor: {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(data.amount)}
                    </p>
                    <button>
                        COMPRAR
                    </button>
                </Footer>
            </Content>
        </Container >
    )
}