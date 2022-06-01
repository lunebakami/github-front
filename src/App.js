import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './routes';

function App() {
  return (
    <ChakraProvider resetCSS={true}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
