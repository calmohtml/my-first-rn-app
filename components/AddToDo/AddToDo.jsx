import { useState } from "react";
import { View, Button } from "react-native";
import { Input } from "./AddToDoStyles";

export default function AddToDo({ submitHandler }) {
  const [description, setDescription] = useState("");

  const changeHandler = (value) => {
    setDescription(value);
  };

  return (
    <View>
      <Input placeholder="Add a task" onChangeText={changeHandler} />
      <Button
        title="Add"
        color="coral"
        onPress={() => submitHandler(description)}
      />
    </View>
  );
}
