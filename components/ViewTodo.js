import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function ViewTodo({todos, deleteHandler}) {
  return (
    <View style={styles.body}>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <View style={styles.todoContainer}>
              <Text style={styles.todo}>{item.text}</Text>
              <TouchableOpacity style={styles.todoCross} onPress={() => deleteHandler(item.key)}>
                <Text style={styles.cross}>&#10060;</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    color: 'black',
    flex: 1,
  },
  todo: {
    marginBottom: 20,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'notoserif',
    borderColor: '#8989ba',
    borderWidth: 2,
    borderRadius: 5,
  },
  list: {flex: 1},
  todoCross: {
    marginBottom: 20,
    padding: 10,
    fontWeight: "bold",
    fontFamily: 'notoserif',
  },
  todoContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cross: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});