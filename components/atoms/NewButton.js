import { Button } from "@chakra-ui/react"
import Link from 'next/link'
import { useRouter } from "next/router"

export default function NewButton (){
  const router = useRouter();
  const onClickNew = () => {
    router.push("/new")
  }

  return (

    <Button
     onClick={onClickNew}
    >
      New
    </Button>
  )
}