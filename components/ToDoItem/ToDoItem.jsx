import { TouchableOpacity } from "react-native";
import { Item } from "./ToDoItemStyles";

export default function ToDoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Item>{item.text}</Item>
    </TouchableOpacity>
  );
}
