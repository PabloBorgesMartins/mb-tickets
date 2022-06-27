import React, { memo } from 'react';
import { Container } from './styles';
import { AiOutlineLoading } from 'react-icons/ai';

const Loader: React.FC = () => {
  return (
    <Container >
      <AiOutlineLoading size={45} />
    </Container>
  );
};

export default memo(Loader);
