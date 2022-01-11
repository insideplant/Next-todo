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

export const SignUpModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { signup } = useAuth();
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const onClickSignup = () => signup(signUpPassword, signUpEmail);
  console.log(signUpPassword, signUpEmail);

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
                value={signUpEmail}
                onChange={(e) => {
                  setSignUpEmail(e.target.value);
                }}
              />
              <InputGroup>
                <Input
                  placeholder="Enter password"
                  type={show ? "text" : "password"}
                  name="password"
                  value={signUpPassword}
                  onChange={(e) => {
                    setSignUpPassword(e.target.value);
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
              onClick={onClickSignup}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
