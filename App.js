import React, {useState} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AddTodo from './components/AddTodo';
import ViewTodo from './components/ViewTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { key: '1', text: "Learn tools" },
    { key: '2', text: "Watch New Rockstars" },
    { key: '3', text: "Watch Cosmic Wonder" },
  ])

  const [listID, setListID] = useState(4);

  const [newtodo, setNewtodo] = useState('Add New Todo')

  const deleteHandler = (key) => {
    setTodos((prevState) => (
      prevState.filter((todo) => todo.key != key)
    ))
  }

  const submitHandler = () => {
    if(newtodo.length > 4) {
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
    } else {
      Alert.alert('Hey!', 'Atleast 5 characters needed.', [
        {
          text: 'Understood',
          onPress: () => console.log('Alert closed')
        }
      ])
    }
  }

  const updateText = (value) => setNewtodo(value);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2b5876', '#4e4376']} style={styles.container}>
        <AddTodo submitHandler={submitHandler} updateText={updateText}/>
        <ViewTodo todos={todos} deleteHandler={deleteHandler} />
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
  }
});
