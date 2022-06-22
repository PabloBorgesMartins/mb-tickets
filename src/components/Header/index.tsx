import { useModal } from '../../hooks/modal';
import logoImg from '../../assets/logo.webp';
import { Container, Content } from './styles';


export function Header() {
    const { setIsModalSignInOpen } = useModal();

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="mblabs" />
                <button onClick={() => setIsModalSignInOpen(true)}>
                    Login
                </button>
            </Content>
        </Container>
    )
}