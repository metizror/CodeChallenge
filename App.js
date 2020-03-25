import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, SectionList, SafeAreaView } from 'react-native';
import PeopleListRow from './components/PeopleListRow';
import useUsers from './utils/useUsers';
import Modal from './components/Modal';

const s = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  pageTitle: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '900',
    padding: 10,
  },
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default function App() {
  const [people] = useUsers();

  return (
    <SafeAreaView style={s.root}>
      <View style={s.container}>
        <Text children="PEOPLE DIRECTORY" style={s.pageTitle} />
        <TextInput style={s.input} />
        <SectionList
          sections={people}
          renderItem={({ item }) => <PeopleListRow {...item} />}
          keyExtractor={(item) => item.login.uuid}
        />
      </View>
      <Modal />
    </SafeAreaView>
  );
}
