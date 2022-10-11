import { ChakraProvider, Button } from "@chakra-ui/react";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">Button</Button>
      <p>aaa</p>
    </ChakraProvider>
  );
}

export default App;
