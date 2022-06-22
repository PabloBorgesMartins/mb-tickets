
import { Container, FormContainer } from './styles';
import img from '../../assets/festivities.svg';


export function SignUp() {



    return (
        <Container>

            <section>
                <h1>Bem vindo ao mb tickets</h1>
                <img
                    src={img}
                    alt="festivities"
                />
            </section>
        </Container>
    )
}