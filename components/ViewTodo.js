import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function ViewTodo({todos, deleteHandler}) {
  return (
    <View style={styles.body}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => deleteHandler(item.key)}>
                  <Text style={styles.cross}>x</Text>
                </TouchableOpacity>
                <Text style={styles.todo}>{item.text}</Text>
              </View>
            )}
          />
        </View>
  );
}

const styles = StyleSheet.create({
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
  cross: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});