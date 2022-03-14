import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import FooterBar from '../../components/FooterBar';
import Icon from 'react-native-vector-icons/AntDesign';

const MenuInfoModal = ({info, isVisible, setVisible}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={isVisible}
    onRequestClose={() => {
      setVisible(!isVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.itemTitleText}>{info.name}</Text>
        <Text style={styles.itemDescriptionText}>
          <Text style={{fontWeight: 'bold'}}>Price: </Text>
          Rp. {info.price},00
        </Text>
        <View style={{height: 15, marginTop: 20}}>
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

const MenuItem = ({info, onSetModalInfo, onSetModalVisible, title}) => {
  const onShowModal = () => {
    onSetModalInfo(info);
    onSetModalVisible(true);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onShowModal} style={{padding: 5}}>
        <Text style={styles.itemTitleText}>{info.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const MenuScreen = ({menu}) => {
  const {data, getMenu} = menu();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const renderItem = ({item}) => (
    <MenuItem
      info={item}
      onSetModalInfo={setModalInfo}
      onSetModalVisible={setModalVisible}
    />
  );

  useEffect(() => {
    getMenu();
  }, []);
  console.log('material data', data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerPosition}>
        <Text style={styles.headerText}>
          Menu <Icon name="upcircleo" size={30} />
        </Text>
      </View>
      <MenuInfoModal
        info={modalInfo}
        setVisible={setModalVisible}
        isVisible={modalVisible}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FooterBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D77FA1',
  },
  headerPosition: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'RobotoCondensed-Bold',
    fontWeight: '900',
    color: 'white',
  },
  button: {
    backgroundColor: '#ECA6A6',
    alignItems: 'center',
    width: 100,
    margin: 12,
    padding: 12,
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

export default MenuScreen;
