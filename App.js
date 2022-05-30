import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
state = {
  nome: '',
}


screen_change = (number) => {
  const { nome } = this.state;

  switch(number){
    case 1:
    return (
      <View style={{alignItems: 'center'}}>
         <TextInput style={styles.input} placeholderTextColor="white" placeholder='Nome' onChangeText={str => this.setState({ nome : str })}/>
          <Pressable style={styles.button}><Text>Solicitar Autorização</Text></Pressable>
          <Pressable style={styles.button}><Text>Limpar</Text></Pressable>
      </View>
    )
    default :
      return( <Text>ERROR</Text> )
  }
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text_header}>Prova Semestral</Text>
          { this.screen_change(1)}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424242',
    alignItems: 'center',
  }, 
  
    text_header: {
    color: '#ED145b',
    fontWeight: '500',
    margin: 10,
    fontSize: 30
  }, 
  
    input: {
    backgroundColor: '#A2A2A2',
    width: '100%',
    maxWidth: 300,
    padding: 5,
    margin: 10,
    color: 'white',
  }, 
  
    button: {
    backgroundColor: '#ED145b',
    width: '15%',
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginVertical: 10,
  }
});
