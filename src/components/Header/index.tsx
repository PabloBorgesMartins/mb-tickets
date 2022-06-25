
import logoImg from '../../assets/logo.webp';
import { Container, Content } from './styles';
/*Components*/
import { useAuth } from '../../hooks/auth';
import { useModal } from '../../hooks/modal';
import { DropdownMenu } from '../DropdownMenu';

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