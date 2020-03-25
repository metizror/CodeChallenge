import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, SectionList, SafeAreaView, Modal } from 'react-native';
import PeopleListRow from './components/PeopleListRow';
import useUsers from './utils/useUsers';
import Modall from './components/Modal';

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

var seletedData = {}

export default function App() {
  const [isModalOpen, setVisible] = useState(false);
  const [people] = useUsers();
  


  setModalOpen = () => {
    setVisible(isModalOpen = !isModalOpen)
  }

  console.log(JSON.stringify(people))

  return (
    <SafeAreaView style={s.root}>
      <View style={s.container}>
        <Text children="PEOPLE DIRECTORY" style={s.pageTitle} />
        <TextInput style={s.input} />
        <SectionList
          sections={people}
          renderItem={({ item }) => <PeopleListRow data={item} onpress={() => {
            seletedData = item
            setVisible(true)
          }} />}
          keyExtractor={(item) => item.login.uuid}
        />
      </View>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => { setVisible(false) }}>

        <Modall data={seletedData} />
      </Modal>
    </SafeAreaView>
  );
}
