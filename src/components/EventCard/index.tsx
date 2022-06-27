import {
    Container,
    Content,
    Footer
} from './styles';

/*Hooks*/
import { useAuth } from '../../hooks/auth';
import { useModal } from '../../hooks/modal';
import { useNavigate } from "react-router-dom";
/*Interfaces*/
import { IFestivity } from '../../interfaces/festivity';

interface ICardProps {
    data: IFestivity;
    isBuyable?: boolean;
}

export function EventCard({ data, isBuyable }: ICardProps) {

    let navigate = useNavigate();
    const { user } = useAuth();
    const { setIsModalSignInOpen } = useModal();

    function handleBuyClick() {
        if (!user) {
            setIsModalSignInOpen(true);
        } else {
            navigate("/evento/comprar/" + data.id, { replace: true });
        }
    }

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
                    Data: {new Intl.DateTimeFormat('pt-BR').format(
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
                    {
                        isBuyable && (
                            <button onClick={handleBuyClick}>
                                COMPRAR
                            </button>
                        )
                    }
                </Footer>
            </Content>
        </Container >
    )
}