import {
    Container,
    Content,
} from './styles';

export function EventCard() {
    return (
        <Container>
            <img
                // src="https://img.static-kl.com/images/media/E95E1F32-A7A4-4FC0-AC0A41A2BC528AE3?aspect_ratio=1:1&min_width=912"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhhl6zmpdM3IGy9nIjDT80mZEiPXwaOtXsw&usqp=CAU"
                alt="party"
            />
            <Content>
                <h1>
                    Festa do Vinho
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <span>
                    12/05/2022 às 13:00
                </span>
                <button>
                    COMPRAR
                </button>
            </Content>
        </Container >
    )
}