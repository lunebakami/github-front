import React, { useEffect, useState } from 'react';
import { Flex, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import {
  FaRegAddressCard,
  FaRegClock,
  FaRegEdit,
  FaUserAlt,
} from 'react-icons/fa';
import api from '../services/api';

export function Profile({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const { data } = await api.get(`/api/users/${username}/details`);

      setUser(data.data);
    }
    loadUser();
  }, []);

  return (
    <Flex
      marginBottom={'50'}
      gap={'10'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Image src={user?.avatar_url} w="200" h="200" rounded="full" />
      <List spacing={3}>
        <ListItem>
          <ListIcon as={FaUserAlt} />
          <strong>ID:</strong> {user?.id}
        </ListItem>
        <ListItem>
          <ListIcon as={FaRegEdit} />
          <strong>Login:</strong> {user?.login}
        </ListItem>
        <ListItem>
          <ListIcon as={FaRegAddressCard} />
          <strong>Profile:</strong>{' '}
          <a href={user?.html_url} target="_blank" rel="noreferrer">
            <Text as="ins">{user?.html_url}</Text>
          </a>
        </ListItem>
        <ListItem>
          <ListIcon as={FaRegClock} />
          <strong>Created At:</strong>{' '}
          {new Date(user?.created_at).toLocaleString('en-US')}
        </ListItem>
      </List>
    </Flex>
  );
}
