import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export default function Home() {
  return (
    <View style={styles.container}>

      <Image source={require('../../../assets/logo.png')} alt='todo logo' />

      <View style={styles.inputContainer}>
      <TextInput style={styles.input}/>
      <TouchableOpacity style={styles.button}>
        
      </TouchableOpacity>
      </View>

      <View>

      </View>
    </View>
  );
}