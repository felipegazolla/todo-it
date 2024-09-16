import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Circle, Trash } from 'lucide-react-native'

type Props = {
  name: string
  onRemove: () => void
  onCheck: () => void
}

export function Task({ name, onCheck, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCheck}>
        <Circle color="#4EA8DE" />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
