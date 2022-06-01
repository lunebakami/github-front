import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { FaGithubAlt } from 'react-icons/fa';
import Users from '../components/Users';

export function Main() {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
      <Icon as={FaGithubAlt} w={60} h={60} />
      <Users />
    </Flex>
  );
}
