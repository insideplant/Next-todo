import { TrTable } from "../../molecules/todo/TrTodoTable";
import { Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";

export const TodosTable = () => {
  const Todos = ["みかん", "りんご", "ぶどう"]
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>STATUS</Th>
          <Th>Todo</Th>
          <Th>Limit</Th>
          <Th>created day</Th>
          <Th>action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Todos.map((todo, index) => {
          return(
          <TrTable
            key={index}
            index={index + 1}
            todo={todo}
          />)
        })}
      </Tbody>
    </Table>
  );
};