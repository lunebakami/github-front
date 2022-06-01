import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import api from '../services/api';

export function Repos({ username }) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    async function loadRepos() {
      const { data } = await api.get(`/api/users/${username}/repos`);
      setRepos(data.data);
    }

    loadRepos();
  }, [username]);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>URL</Th>
          </Tr>
        </Thead>
        <Tbody>
          {repos?.map((repo) => (
            <Tr key={repo.id}>
              <Td>{repo.id}</Td>
              <Td> {repo.name}</Td>
              <Td>
                <a target={'_blank'} href={repo.html_url} rel="noreferrer">
                  {repo.html_url}
                </a>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
