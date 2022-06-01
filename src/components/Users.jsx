import { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
  Button,
  Image,
  Center,
} from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';
import api from '../services/api';
import { Link } from 'react-router-dom';
function Users() {
  const [users, setUsers] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  async function loadUsers(url) {
    const defaultUrl = url || '/api/users';
    const { data } = await api.get(defaultUrl);

    setUsers(data.data);
    setNextPage(data.nextPage);
    setPreviousPage(data.previousPage);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>
              <Center>
                <Icon as={FaUserAlt} />
              </Center>
            </Th>
            <Th>Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user) => (
            <Tr key={user.id}>
              <Td alignItems={'center'}>
                <Center>
                  <Image w="10" h="10" rounded={'full'} src={user.avatar_url} />
                </Center>
              </Td>
              <Td>{user.login}</Td>
              <Td>
                <Link to={`user/${user.login}`}>
                  <Button>See More</Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>
              <Button
                onClick={() => loadUsers(previousPage)}
                colorScheme="teal"
                size="md"
              >
                Previous Button
              </Button>
            </Th>
            <Th>Current Page</Th>
            <Th>
              <Button
                onClick={() => loadUsers(nextPage)}
                colorScheme="teal"
                size="md"
              >
                Next Button
              </Button>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default Users;
