
import React, {useState} from 'react';

import {Text,View, StyleSheet, TextInput, Platform } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


export function Home(){

    const [newSkill, setNewSkill] = useState();
    const [mySkill, setMySkill] = useState([]);


    function handleAddNewSkill(){
        setMySkill(oldState=> [...oldState, newSkill])
    }

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Olá, Ton</Text>
        <TextInput
        style={styles.input}
        placeholder="Competencias"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        />
        <Button onPress={handleAddNewSkill}/>
        <Text style={[styles.title, {marginVertical: 10}]}>
            Minhas Competencias
        </Text>
        {mySkill.map(skill=>{
            return(
               <SkillCard  key={skill} skill={skill}/>
            )
        }) }
        
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
    title:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#1f1e25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15: 10,
        marginTop:30,
        borderRadius: 7
    },

    
})
