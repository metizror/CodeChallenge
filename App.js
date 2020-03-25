import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, SectionList, SafeAreaView,Dimensions } from 'react-native';
import PeopleListRow from './components/PeopleListRow';
import useUsers from './utils/useUsers';
import Modall from './components/Modal';
import SearchInput, { createFilter } from 'react-native-search-filter';
import Modal from 'react-native-modal';
const KEYS_TO_FILTERS = ['data.name.title', 'data.name.first', 'data.name.last', 'data.email', 'data.phone', 'data.cell'];
// person's full name, email, phone & cell numbers
const { width, height } = Dimensions.get('window');

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
    marginTop: 20,
  },
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  searchInput: {
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});

var seletedData = {}

export default function App() {
  const [isModalOpen, setVisible] = useState(false);
  const [people] = useUsers();
  const [searchTerm, serchUpdate] = useState("")
  const filteredEmails = people.filter(createFilter(searchTerm, KEYS_TO_FILTERS))


  setModalOpen = () => {
    setVisible(isModalOpen = !isModalOpen)
  }

  return (
    <SafeAreaView style={s.root}>
      <View style={s.container}>
        <Text children="PEOPLE DIRECTORY" style={s.pageTitle} />
        <SearchInput
          onChangeText={(term) => { serchUpdate(term) }}
          style={s.input}
          placeholder="Type a message to search"
        />
        {/* <TextInput style={s.input} /> */}
        <SectionList
          sections={filteredEmails}
          renderItem={({ item }) => <PeopleListRow data={item} onpress={() => {
            seletedData = item
            setVisible(true)
          }} />}
          keyExtractor={(item) => item.login.uuid}
        />
      </View>

      <Modal
        testID={'modal'}
        isVisible={isModalOpen}
        backdropColor="rgba(0, 0, 0, 0.2)"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
       
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>

        <Modall data={seletedData} onpress={() => setVisible(false)} />

      </Modal>
    </SafeAreaView>
  );
}
