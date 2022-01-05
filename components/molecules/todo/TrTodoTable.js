import { Tr, Td } from "@chakra-ui/react"
import Link from 'next/link'

const PostLink = (props) => (
  <Link href={`/show?title=${props.title}`}>
    <a>{props.title}</a>
  </Link>
)

export const TrTable = (props) => {
  const { index, todo } = props;

  return (
    <Tr>
      <Td>{index}</Td>
      <Td><PostLink title={todo} /></Td>
      <Td>test</Td>
      <Td>test</Td>
      <Td> test </Td>
      <Td></Td>
    </Tr>
  )
}