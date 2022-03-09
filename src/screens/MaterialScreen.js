import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';

const MATERIAL_SUBJECT = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Golang Fundamental',
    description: 'Learn basic of go programming language',
    duration: '9 days',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Golang SQL',
    description: 'Learn how to connect go with relational database',
    duration: '7 days',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'JavaScript',
    description: 'Learn basic of JavaScript programming language',
    duration: '5 days',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'React Fundamental',
    description: 'Learn to build single page web application',
    duration: '7 days',
  },
  {
    id: '88694a0f-3da1-471f-bd96-145571e29c34',
    title: 'React Native Fundamental',
    description: 'Learn to build multiplatform mobile application',
    duration: '6 days',
  },
  {
    id: '88694a0f-3da1-471f-bd96-145571e29c35',
    title: 'Java',
    description: 'Learn to build backend application',
    duration: '6 days',
  },
  {
    id: '88694a0f-3da1-471f-bd96-145571e29c36',
    title: 'Java Springboot',
    description: 'Learn to build backend application',
    duration: '6 days',
  },
  {
    id: '88694a0f-3da1-471f-bd96-145571e29c90',
    title: 'Flutter',
    description: 'Learn to build multiplatform mobile application',
    duration: '6 days',
  },
];

const MaterialInfoModal = ({info, isVisible, setVisible}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={isVisible}
    onRequestClose={() => {
      setVisible(!isVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.itemTitleText}>{info.title}</Text>
        <Text style={styles.itemDescriptionText}>{info.description}</Text>
        <Text style={styles.itemDescriptionText}>
          <Text style={{fontWeight: 'bold'}}>Duration: </Text>
          {info.duration}
        </Text>
        <View style={{height: 15}}>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => {
              setVisible(!isVisible);
            }}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const MaterialItem = ({info, onSetModalInfo, onSetModalVisible, title}) => {
  const onShowModal = () => {
    onSetModalInfo(info);
    onSetModalVisible(true);
  };

  return (
    <View>
      <TouchableOpacity onPress={onShowModal} style={{padding: 5}}>
        <Text style={styles.itemTitleText}>{info.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const MaterialScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const renderItem = ({item}) => (
    <MaterialItem
      info={item}
      onSetModalInfo={setModalInfo}
      onSetModalVisible={setModalVisible}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <MaterialInfoModal
        info={modalInfo}
        setVisible={setModalVisible}
        isVisible={modalVisible}
      />
      <FlatList
        data={MATERIAL_SUBJECT}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D77FA1',
    padding: 5,
  },
  item: {
    backgroundColor: '#FCBF49',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  itemTitleText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  itemDescriptionText: {
    fontFamily: 'Roboto-Regular',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default MaterialScreen;
