import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Clipboard, PlusCircle } from 'lucide-react-native'

export default function Home() {
  return (
    <View style={styles.container}>

      <Image source={require('../../../assets/logo.png')} alt='todo logo' />

      <View style={styles.form}>
      <TextInput style={styles.input} placeholder='Adicione uma nova tarefa' placeholderTextColor="#808080"/>
      <TouchableOpacity style={styles.button}>
        <PlusCircle color='#FFF' size={20} />
      </TouchableOpacity>
      </View>

      <View style={styles.backgroundTasks} >
        <View style={styles.tasks}>

          <View style={styles.countertasks}>
            <View style={styles.desirecounters}>
          <Text style={styles.created}>
            Criadas
          </Text>
          <View style={styles.backgroudnCounter}>
            <Text style={styles.counter}>
              0
            </Text>
            </View>
            </View>
          <View style={styles.desirecounters}>
          <Text style={styles.done}>
          Concluídas
          </Text>
            <View style={styles.backgroudnCounter}>
            <Text style={styles.counter}>
              0
            </Text>
            </View>
            </View>
          </View>

        <View style={styles.separator} />


        <View style={styles.empty}>
          <Clipboard size={80} color='#333333'/>
          <Text style={styles.textemptybold}>
          Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.textempty}>
          Crie tarefas e organize seus itens a fazer
          </Text>

        </View>


        </View>
      </View>
    </View>
  );
}