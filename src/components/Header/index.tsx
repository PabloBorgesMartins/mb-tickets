
import logoImg from '../../assets/logo.webp';
import { Container, Content } from './styles';
/*Components*/
import { useAuth } from '../../hooks/auth';
import { useModal } from '../../hooks/modal';
import { DropdownMenu } from '../DropdownMenu';
import { Link } from 'react-router-dom';

export function Header() {
    const { setIsModalSignInOpen, setIsModalSignUpOpen } = useModal();
    const { user, signOut } = useAuth();

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="mblabs" />
                <DropdownMenu />
                {
                    user ? (
                        <section>
                            <Link to="/evento/criar">
                                <button>
                                    <p>Criar evento</p>
                                </button>
                            </Link>
                            <Link to="/">
                                <button>
                                    <p>Inicio</p>
                                </button>
                            </Link>
                            <button onClick={() => signOut()}>
                                Sair
                            </button>
                        </section>
                    ) : (
                        <section>
                            <button onClick={() => setIsModalSignInOpen(true)}>
                                Login
                            </button>
                            <button onClick={() => setIsModalSignUpOpen(true)}>
                                Cadatre-se
                            </button>
                        </section>
                    )
                }
            </Content >
        </Container >
    )
}