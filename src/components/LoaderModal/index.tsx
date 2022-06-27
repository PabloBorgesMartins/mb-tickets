import { memo, useEffect, useState } from 'react';
import { Container, ContainerCheck } from './styles';
/*Libraries*/
import Modal from 'react-modal';
import { AiOutlineLoading, AiOutlineCheck } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

interface ILoaderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  callbackLink: string;
}

Modal.setAppElement('#root');

export function LoaderModal({ isOpen, onRequestClose, callbackLink }: ILoaderProps) {

  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  function emulate() {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        navigate(callbackLink, { replace: true });
        onRequestClose();
      }, 1000)
    }, 1000)
  }

  function reset() {
    setIsLoading(true);
  }

  useEffect(() => {
    if (isOpen) {
      emulate();
    } else {
      reset();
    }
  }, [isOpen])

  return (
    <Modal
      isOpen={isOpen}
      // onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {
        isLoading ? (
          <Container >
            <AiOutlineLoading size={45} />
          </Container>
        ) : (
          <ContainerCheck>
            <AiOutlineCheck size={45} />
            <h1>Sucesso!</h1>
          </ContainerCheck>
        )
      }
    </Modal>
  );
};

export default memo(LoaderModal);
