import { useState } from "react";
import {
  Alert,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header/Header";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import { Container, Content, ListContainer } from "./AppStyles";

export default function App() {
  const [activity, setActivity] = useState([
    { text: "buy course", key: 1 },
    { text: "end UX course", key: 2 },
    { text: "ride bike", key: 3 },
  ]);

  const submitHandler = (text) => {
    if (text.length > 3) {
      setActivity((previousToDo) => {
        return [{ text: text, key: Math.random().toString() }, ...previousToDo];
      });
    } else {
      Alert.alert("Error", "Please add more than 3 characters");
    }
  };

  const pressHandler = (key) => {
    setActivity((previousToDo) => {
      return previousToDo.filter((todo) => todo.key !== key);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Container>
        <Header />
        <Content>
          <AddToDo submitHandler={submitHandler} />
          <ListContainer>
            <FlatList
              data={activity}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </ListContainer>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
