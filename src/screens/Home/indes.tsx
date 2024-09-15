import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Clipboard, PlusCircle } from 'lucide-react-native'
import { Task } from '../../components/Task';
import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName] = useState('')

  function handleTaskAdd() {
    if (taskName.length <= 0) {
      return Alert.alert('Digite o nome da tarefa!', 'Para adicionar uma tarefa é preciso dar um nome.')
    }

    if (tasks.includes(taskName)) {
      return Alert.alert('Tarefa existente!', 'Já existe uma tarefa com este nome na lista.')
    }

    setTasks(prevState => [...prevState, taskName])
    setTaskName('')
  }

  function handleTaskCheck() {
    console.log('Task checked!')
  }

  function handleRemoveTask(name: string) {
    Alert.alert('Deseja remover a tarefa?', 'Tem certeza que deseja remover esta tarefa da lista?', [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task !== name))
        }
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])
  }

  return (
    <View style={styles.container}>

      <Image source={require('../../../assets/logo.png')} alt='todo logo' />

      <View style={styles.form}>
      <TextInput value={taskName} onChangeText={setTaskName} style={styles.input} placeholder='Adicione uma nova tarefa' placeholderTextColor="#808080"/>
      <TouchableOpacity onPress={handleTaskAdd} style={styles.button}>
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
            <Task name={item} key={item} onCheck={handleTaskCheck} onRemove={() => handleRemoveTask(item)} />
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