import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import image from '../../assets/paw-dog.png';

export default function Home(props){
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <TouchableOpacity 
        style={styles.button} 
        onPress={()=>props.navigation?.navigate("Login")}>
        <Text style={styles.buttonLabel}>logar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>props.navigation?.navigate("Register")}>
        <Text style={styles.buttonLabel}>cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}