import { useState } from 'react';
import {
    Container,
    UserContent,
    DisplayTypeContainer,
    RadioBox
} from './styles';
/*Hooks*/
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";
/*Libraries*/
import { BsGearFill } from 'react-icons/bs';
/*Components*/
import { TicketList } from './components/TicketList';
import { FestivityList } from './components/FestivityList';


export function Profile() {

    let navigate = useNavigate();
    const { user } = useAuth();
    const [selected, setSelected] = useState("tickets");

    return (
        <Container>
            <UserContent>
                <img src="https://images.unsplash.com/photo-1653605879308-a28cdbca6fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" alt="profile-avatar" />
                <h1>{user.fullName}</h1>
                <h2>{user.email}</h2>
                <BsGearFill
                    onClick={() => navigate("/perfil/editar/", { replace: true })}
                    size={28}
                />
                <DisplayTypeContainer>
                    <RadioBox
                        isActive={selected === "tickets"}
                        onClick={() => setSelected("tickets")}
                    >
                        <p>Meus Ingressos</p>
                    </RadioBox>
                    <RadioBox
                        isActive={selected === "festivities"}
                        onClick={() => setSelected("festivities")}
                    >
                        <p>Meus Eventos</p>
                    </RadioBox>
                </DisplayTypeContainer>
                {
                    selected === "tickets" ? (
                        <TicketList />
                    ) : (
                        <FestivityList />
                    )
                }
            </UserContent>
        </Container>
    )
}