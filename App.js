import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text,setText] = useState("")
  const [tasksList, setTasksList] = useState([])

  const handleAddTask = ()=>{
    setTasksList(prevState=>[...prevState,{id:Math.random(), value:text}])
    setText("")
  }

  const onHandleDeleteItem = (id)=>{
    console.log(id)
  }

  const renderListItem = ({item}) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskItem}>{item.value}</Text>
      <Button title="x" color="#d64933" onPress={()=>onHandleDeleteItem(item.id)} />
    </View>
    
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Agrega una tarea'
          onChangeText={(text)=>setText(text)}
          style={styles.textInput}
          value={text}
        />
        <Button
          title="Agregar"
          color="#0c7c59"
          onPress={handleAddTask}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={tasksList}
          keyExtractor={item=>item.id}
          renderItem={renderListItem}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          windowSize={5}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 64,
    marginBottom: 16
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:16
  },
  textInput:{
    width:'70%',
    borderBottomColor:'#ccc',
    borderBottomWidth: 1,
  },
  listContainer:{
    width: '90%',
    margin: 16,
  },
  taskContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginVertical: 8
  }
});
