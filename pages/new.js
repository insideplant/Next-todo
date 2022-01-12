import { useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";

import { auth, db } from "../Firebase/firebase";

export default function New() {
  const [task, setTask] = useState("");
  const [detail, setDetail] = useState("");

  const addEvent = async () => {
    await addDoc(collection(db, "Todos"), {
      userId: auth.currentUser?.uid,
      task,
      detail,
    });
    setTask("");
    setDetail("");
  };

  return (
    <>
      <Text>Task</Text>
      <Input value={task} onChange={(e) => setTask(e.target.value)}></Input>
      <Text>Detail</Text>
      <Input value={detail} onChange={(e) => setDetail(e.target.value)}></Input>
      <Button onClick={addEvent}>投稿</Button>
    </>
  );
}
