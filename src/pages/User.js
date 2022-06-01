import React from 'react';
import { Container, Flex } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { Repos } from '../components/Repos';
import { Profile } from '../components/Profile';

export function User() {
  const { username } = useParams();

  return (
    <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
      <Container maxW="container.sm" marginTop="50">
        <Profile username={username} />
        <Repos username={username} />
      </Container>
    </Flex>
  );
}
