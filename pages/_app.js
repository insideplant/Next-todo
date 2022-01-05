import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/organisms/layout/Header'
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "yellow.300",
        color: "gray.800",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
