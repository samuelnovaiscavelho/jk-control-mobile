import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';



export default class App extends React.Component {
      state = {
      nome: '',
      screen_1: true,
      screen_2: false,
      auth: 0
  }


  render() {
    const { screen_1, screen_2, auth, nome }  = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.text_header}>Prova Semestral</Text>
        {
          screen_1 &&
          <View style={styles.container}>
            < TextInput style={styles.input} placeholderTextColor="white" placeholder='Nome' onChangeText={str => this.setState({ nome: str })}/>
            <Pressable style={styles.button} onPress={() => this.setState({ screen_1: false, screen_2: true })}><Text>Solicitar Autorização</Text></Pressable>
            <Pressable style={styles.button}><Text>Limpar</Text></Pressable>
            {
              auth == 1 && 
              <>
                <Text style={{color: 'green'}}>{nome} autorizado</Text>
              </>
            }
            {
              auth == 2 && 
              <>
                <Text style={{color: 'red'}}>{nome} não autorizado</Text>
              </>
            }
          </View>
        }
        {
          screen_2 && 
          <View style={styles.container}>
            <Text style={{color: 'white', fontWeight: '700'}}>{nome}</Text>
            <Pressable style={styles.button} onPress={() => this.setState({ screen_2: false, screen_1: true, auth: 1 })}><Text>Autorizar</Text></Pressable>
            <Pressable style={styles.button} onPress={() => this.setState({ screen_2: false, screen_1: true, auth: 2 })}><Text>Nao Autorizar</Text></Pressable>
          </View>
        }
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
