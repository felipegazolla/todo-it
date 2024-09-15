import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Circle, Trash } from "lucide-react-native";

type Props = {
  task: string
}

export function Task({ task }: Props) {
  function handleTaskCheck() {
    console.log('Task checked!')
  }

  function handleRemoveTask() {
    console.log('Task removed!')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleTaskCheck} >
        <Circle color="#4EA8DE"/>
      </TouchableOpacity>
        <Text style={styles.text}>
          {task}
        </Text>
      <TouchableOpacity onPress={handleRemoveTask}>
        <Trash color="#808080"/>
      </TouchableOpacity>
    </View>
  )
}