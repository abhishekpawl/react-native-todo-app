import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [todos, setTodos] = useState([
    { key: '1', text: "Go to market" },
    { key: '2', text: "Get a haircut" },
    { key: '3', text: "Pay bills" },
    { key: '4', text: "Watch Cosmic Wonder" },
  ])

  const deleteHandler = (key) => {
    setTodos((prevState) => (
      prevState.filter((todo) => todo.key != key)
    ))
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#ebbba7', '#cfc7f8']} style={styles.container}>
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
    padding: 40,
    color: 'black',
  },
  todo: {
    margin: 10,
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'notoserif',
    borderColor: '#8989ba',
    borderWidth: 2,
    borderRadius: 5,
  },
  todoContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
  }
});
