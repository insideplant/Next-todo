import react, { useState, useEffect } from "react";
import NewButton from "../../components/atoms/NewButton";
import { useRouter } from "next/router";
import { collection, onSnapshot, query, where } from "@firebase/firestore";
import { db, auth } from "../../Firebase/firebase";
import { Text } from "@chakra-ui/react";

export default function user() {
  const router = useRouter();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "Todos"),
      where("userId", "==", "RCh0834eOxe93GRracyyIF4YgwH3")
    );
    const unSub = onSnapshot(q, (querySnapshot) => {
      let todos = querySnapshot.docs.map((doc) => ({
        userId: doc.data().userId,
        task: doc.data().task,
        detail: doc.data().detail,
      }));
      setTodos(todos);
      console.log(todos);
    });
  }, []);
  return (
    <>
      {todos.map((todo) => {
        return (<Text>{todo.task}</Text>);
      })}
      <NewButton />
    </>
  );
}
