import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { CheckCircle, Circle, Trash } from 'lucide-react-native'

type Props = {
  name: string
  done: boolean
  onRemove: () => void
  onCheck: () => void
}

export function Task({ name, done, onCheck, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCheck}>
        {done ? <CheckCircle color="#5E60CE" /> : <Circle color="#4EA8DE" />}
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          done && { textDecorationLine: 'line-through', color: '#808080' },
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
