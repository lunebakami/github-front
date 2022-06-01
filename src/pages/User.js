import React from 'react';
import { Container, Flex } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import Repos from '../components/Repos';

export function User() {
  const { username } = useParams();

  return (
    <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
      <Container maxW="container.sm" marginTop="50">
        <User username={username} />
        <Repos username={username} />
      </Container>
    </Flex>
  );
}
