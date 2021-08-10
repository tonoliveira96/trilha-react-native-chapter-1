import React, {useEffect, useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  Alert,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export interface SkillsData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkill, setMySkill] = useState<SkillsData[]>([]);
  const [welcome, setWelcome] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkill(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkill(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setWelcome('Bom dia');
    } else if (currentHour >= 12 && currentHour < 18) {
      setWelcome('Boa tarde');
    } else {
      setWelcome('Boa noite');
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{welcome}, Ton</Text>
        <TextInput
          style={styles.input}
          placeholder="Competência"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />
        <Button onPress={handleAddNewSkill} title="Adicionar" />
        <Text style={[styles.title, {marginVertical: 30}]}>
          Minhas Competências
        </Text>
        <FlatList
          data={mySkill}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SkillCard
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
