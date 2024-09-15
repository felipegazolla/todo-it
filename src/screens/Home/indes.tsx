import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Clipboard, PlusCircle } from 'lucide-react-native'
import { Task } from '../../components/Task';

export default function Home() {
  const tasks = [
    'Ver a previsao do tempo',
    'Colocar o despertador',
    'Passear com a Mirian',
    'Brincar com o Mauricio'
  ]


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

        <FlatList 
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task task={item} key={item} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.empty}>
            <Clipboard size={80} color='#333333'/>
            <Text style={styles.textemptybold}>
            Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.textempty}>
            Crie tarefas e organize seus itens a fazer
            </Text>

          </View>
          }
        />

        </View>
      </View>
    </View>
  );
  }