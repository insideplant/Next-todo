import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SignInModal } from "../components/organisms/layout/SignInModal";
import { useAuth } from "../components/hooks/useAuth";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { login } = useAuth();
  const onClickLogin = () => login(email, password);

  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Box py={5} px={10} w="md">
          <Text fontSize="4xl">
            Todoを使うと、友達や同僚、同級生、仲間たちとつながりを深められます。
            ケータイ、スマートフォンからもアクセスできます。
          </Text>
        </Box>
        <Box py={5} borderRadius="md" shadow="md" w="sm">
          <Stack spacing={4} py={4} px={10}>
            <Input
              placeholder="User ID"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputGroup>
              <Input
                placeholder="Password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <hr />

            <Button onClick={onClickLogin}>Login</Button>
            <SignInModal />
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
