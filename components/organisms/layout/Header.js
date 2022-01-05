import { Flex, Heading, Text } from "@chakra-ui/layout";

export const Header = () => {
  return (
    <Flex 
      as="nav" 
      bg="orange.400"
      color="orange.900"
      align="center"
      justify="space-between"
      padding={{base: "3", md:"5"}}
    >
      <Heading as="h1" fontSize={{ base: "md", md: "xl"}}>
        TODO
      </Heading>
    </Flex>
  )
}