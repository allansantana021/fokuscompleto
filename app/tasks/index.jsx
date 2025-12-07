import { View, Text, StyleSheet, Modal } from "react-native";
import TaskItem from "../../src/components/TaskItem";
import { useState } from "react";
import { ActionButton } from "../../src/components/ActionButton";
import { FokusButton } from '../../src/components/FokusButton';
import { TextInput } from "react-native-web";

export default function Tasks() {
  const [tasks, setTask] = useState([
    { id: "1", name: "Pagar contas", state: true },
    { id: "2", name: "Estudar lingua portuguesa", state: false },
    { id: "3", name: "Estudar programação", state: false },
  ]);

  const [taskName, setTaskName] = useState('');

  const [modalVisibility, setModalVisibility] = useState(false);

  function completeTask(taskId) {
    setTask(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId ? { ...task, state: task.state === false ? true : false } : task
            )
        );
  }

  function deleteTask(taskId) {
    setTask(prevTasks => 
            prevTasks.filter(task => task.id !== taskId)
        );
  }

  function editTask() {}

  function createTask(){
        if (taskName.trim() === '') {
            return; // Impede a adição de tarefas vazias
        }

        // 💡 LÓGICA PARA O PRÓXIMO ID SEQUENCIAL
        
        // 1. Encontrar o maior ID atual (convertendo string para número)
        const maxId = tasks.reduce((max, task) => {
            // Converte o ID string para número e verifica se é maior que o 'max' atual
            const currentId = Number(task.id);
            return currentId > max ? currentId : max;
        }, 0); // O valor inicial '0' garante que a contagem comece em 1, mesmo com a lista vazia.

        // 2. Calcular o próximo ID e converter de volta para string
        const nextId = (maxId + 1).toString(); 

        // 3. Cria o novo objeto de tarefa
        const newTask = {
            id: nextId, 
            name: taskName,
            state: 0,
        };

        // 4. Adiciona a nova tarefa à lista
        setTask(prevTasks => [newTask, ...prevTasks]);
        setTaskName('');

        setModalVisibility(false);
  }


  console.log(tasks);

  const completedTasks = tasks.filter((task) => task.state == true);

  const incompletedTasks = tasks.filter((task) => task.state == false);

   
  console.log(completedTasks);
  console.log(incompletedTasks);

  return (
    <View style={styles.container}>
      <View style={styles.pageTitle}>
        <Text style={styles.pageTitleText}>Lista de Tarefas</Text>
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Tarefas Não Concluídas: </Text>
        {incompletedTasks.map((task) => (
          <View key={task.id}>
            <TaskItem
              text={task.name}
              state={task.state}
              onComplete={() => completeTask(task.id)}
              onDelete={() => deleteTask(task.id)}
              onEdit={editTask}
            />
          </View>
        ))}
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}> Tarefas Concluídas: </Text>
        {completedTasks.map((task) => (
          <View key={task.id}>
            <TaskItem
              text={task.name}
              state={task.state}
              onComplete={completeTask}
              onDelete={() => deleteTask(task.id)}
              onEdit={editTask}
            />
          </View>
        ))}
      </View>
      <View style={styles.footerButtons}>
        <FokusButton 
                title='+Criar Nova Tarefa'
                onPress={() => setModalVisibility(true)}
        />
      </View>

      <Modal visible={modalVisibility}>
        <View style={styles.container}>
            <Text style={styles.pageTitleText}>Crie uma tarefa</Text>
            <TextInput
                placeholder="Escreva o nome da tarefa" 
                style={styles.input} 
                value={taskName}  
                onChangeText={setTaskName}
            />
            <FokusButton 
                title='+Criar Tarefa'
                onPress={() => createTask()}
            />
            <FokusButton 
                title='Voltar'
                onPress={() => setModalVisibility(false)}
            />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    gap: 40,
    padding: 16,
  },
  pageTitle: {
    marginTop: 16,
  },
  pageTitleText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  taskContainer:{
    gap: 12
  },
  taskTitle:{
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  footerButtons:{
    flex: 1,
    justifyContent:'flex-end',
    marginBottom: 50
  },
   input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: "#fff",
        marginBottom: 20,
    }
});
