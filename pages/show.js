import {withRouter} from 'next/router'
import { Container, Heading } from "@chakra-ui/react"

const Page = withRouter((props) => (
  <Container maxW="container.xl">
    <Heading as="h3" size="lg" p={4}>
      {props.router.query.title}
    </Heading>
  </Container>
))

export default Page