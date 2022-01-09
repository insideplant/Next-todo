import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { auth } from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function login() {
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      user && console.log("test");
    });
    return () => unSub();
  }, []);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box py={5} px={10} w="md">
        <Text fontSize="4xl">
          Todoを使うと、友達や同僚、同級生、仲間たちとつながりを深められます。
          ケータイ、スマートフォンからもアクセスできます。
        </Text>
      </Box>
      <Box bg="orange.100" py={5} borderRadius="md" shadow="md" w="sm">
        <Stack spacing={4} py={4} px={10}>
          <Input
            placeholder="User ID"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <hr />

          <Button>Login</Button>
          <Button>Create new account</Button>
        </Stack>
      </Box>
    </Flex>
  );
}
