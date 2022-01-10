import react, { useState } from "react";
import {
  Button,
  Input,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  useDisclosure,
  InputGroup,
} from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";

export const SignInModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { signin } = useAuth();
  const [signInPassword, setSignInPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const onClickSignin = () => signin(signInPassword, signInEmail);

  return (
    <>
      <Button onClick={onOpen}>Create new account</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <Input
                placeholder="Enter Email"
                name="email"
                value={signInEmail}
                onChange={(e) => {
                  setSignInEmail(e.target.value);
                }}
              />
              <InputGroup>
                <Input
                  placeholder="Enter password"
                  type={show ? "text" : "password"}
                  name="password"
                  value={signInPassword}
                  onChange={(e) => {
                    setSignInPassword(e.target.value);
                  }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme="blue"
              bg="orange.300"
              onClick={onClickSignin}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
