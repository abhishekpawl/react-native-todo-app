import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler, updateText}) {
  return (
    <View>
      <TextInput
      multiline
      style={styles.input}
      onChangeText={updateText}
      placeholder='Add new todo'
      />
      <View style={styles.addButtonOuter}>
        <View style={styles.addButtonInner}>
          <Button title='add' color="#777" onPress={submitHandler}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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