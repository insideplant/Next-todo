import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/organisms/layout/Header'
import { extendTheme } from "@chakra-ui/react";
import { auth } from '../Firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "",
        color: "gray.800",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //Firebase ver9 compliant (modular)
    const unSub = onAuthStateChanged(auth, (user) => {
      !user && console.log("login");
    });
    return () => unSub();
  });

  return (
    <ChakraProvider theme={theme}>
      <Header />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
