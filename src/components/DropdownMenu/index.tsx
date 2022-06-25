import { MouseEvent, useCallback, useState } from 'react';
/*Libraries*/
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
/*Hooks*/
import { useAuth } from '../../hooks/auth';
import { useModal } from '../../hooks/modal';
/* Styles */
import { Button, Container, Divider } from './styles';


export function DropdownMenu() {
  const { user, signOut } = useAuth();
  const { setIsModalSignInOpen, setIsModalSignUpOpen } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = useCallback(
    (evt: MouseEvent) => {
      evt.stopPropagation();
      setIsOpen(!isOpen);
    },
    [isOpen, setIsOpen]
  );

  return (
    <Container isMenuOpen={isOpen} onClick={handleToggleMenu}>
      {!isOpen ? <BiMenu size={25} /> : <BiMenuAltLeft size={25} />}
      <div className="menu">
        <h1>mb-tickets</h1>
        <Divider />
        {user ? (
          <>
            <Link to="/">
              <Button>
                <p>eventos</p>
              </Button>
            </Link>
            <Button onClick={signOut}>
              <p>Sair</p>
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => setIsModalSignInOpen(true)}>
              <p>login</p>
            </Button>
            <Button onClick={() => setIsModalSignUpOpen(true)}>
              <p>cadastrar</p>
            </Button>
          </>
        )}
      </div>
    </Container>
  );
};
