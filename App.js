import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [todos, setTodos] = useState([
    /* { key: '1', text: "Go to market" },
    { key: '2', text: "Get a haircut" },
    { key: '3', text: "Pay bills" },
    { key: '4', text: "Watch Cosmic Wonder" }, */
  ])

  const [listID, setListID] = useState(1);

  const [newtodo, setNewtodo] = useState('Add New Todo')

  const deleteHandler = (key) => {
    setTodos((prevState) => (
      prevState.filter((todo) => todo.key != key)
    ))
  }

  const submitHandler = () => {
    setTodos((prevState) => {
      return [
        ...prevState,
        {
          text: newtodo,
          key: listID
        }
      ]
    })
    setListID(listID + 1)
    setNewtodo('')
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2b5876', '#4e4376']} style={styles.container}>
        <View>
          <TextInput
          multiline
          style={styles.input}
          onChangeText={(value) => setNewtodo(value)}
          placeholder='Add new todo'
          />
          <View style={styles.addButtonOuter}>
            <View style={styles.addButtonInner}>
              <Button title='add' color="#777" onPress={submitHandler}/>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => deleteHandler(item.key)}><Text>x</Text></TouchableOpacity>
                <Text style={styles.todo}>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    color: 'black',
  },
  body: {
    padding: 20,
    color: 'black',
  },
  todo: {
    /* margin: 10, */
    marginBottom: 20,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'notoserif',
    borderColor: '#8989ba',
    borderWidth: 2,
    borderRadius: 5,
  },
  todoContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
  },
  input: {
    borderWidth: 2,
    borderColor: '#8989ba',
    padding: 8,
    marginTop: 80,
    marginBottom: 10,
    width: 300,
    borderRadius: 5,
    color: '#000'
  },
  addButtonOuter: {
    alignItems: 'center',
  },
  addButtonInner: {
    width: 60,
    alignContent: 'space-between'
  }
});
