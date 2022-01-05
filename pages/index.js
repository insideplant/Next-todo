import { Container } from "@chakra-ui/react"
import { TodosTable } from "../components/organisms/todo/TodosTable"

export default function Home() {
  return (
    <div>
      <Container maxW="container.lg">
        <TodosTable />
      </Container>
    </div>
  )
}
