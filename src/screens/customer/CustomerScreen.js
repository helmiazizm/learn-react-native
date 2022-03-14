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
import {goToScreen} from '../../navigation/NavigationHelper';
import {WELCOME_PATH} from '../../navigation/NavigationPath';
import AddCustomer from './AddCustomer';

const CustomerInfoModal = ({
  info,
  isVisible,
  setVisible,
  delCustomer,
  isCustomerVisible,
  setCustomerVisible,
  getCustomerById,
}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={isVisible}
    onRequestClose={() => {
      setVisible(!isVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.itemTitleText}>{info.nama}</Text>
        <Text style={styles.itemDescriptionText}>
          <Text style={{fontWeight: 'bold'}}>Email: </Text>
          {info.email}
        </Text>
        <Text style={styles.itemDescriptionText}>
          <Text style={{fontWeight: 'bold'}}>Alamat: </Text>
          {info.alamat}
        </Text>
        <View style={styles.buttonPlacement}>
          <TouchableOpacity
            style={[
              styles.modalButton,
              {backgroundColor: 'orange', marginRight: 5},
            ]}
            onPress={async () => {
              await getCustomerById(info.id);
              setVisible(!isVisible);
              setCustomerVisible(!isCustomerVisible);
            }}>
            <Text style={{color: 'white'}}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modalButton,
              {backgroundColor: 'red', marginHorizontal: 5},
            ]}
            onPress={async () => {
              await delCustomer(info.id);
              setVisible(!isVisible);
            }}>
            <Text style={{color: 'white'}}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modalButton,
              {backgroundColor: 'grey', marginLeft: 5},
            ]}
            onPress={() => {
              setVisible(!isVisible);
            }}>
            <Text style={{color: 'white'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const CustomerItem = ({info, onSetModalInfo, onSetModalVisible, title}) => {
  const onShowModal = () => {
    onSetModalInfo(info);
    onSetModalVisible(true);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onShowModal} style={{padding: 5}}>
        <Text style={styles.itemTitleText}>{info.nama}</Text>
      </TouchableOpacity>
    </View>
  );
};

const CustomerScreen = ({customer}) => {
  const {
    data,
    dataById,
    setDataById,
    updateCustomer,
    getCustomerById,
    getCustomer,
    addCustomer,
    delCustomer,
  } = customer();
  const [modalVisible, setModalVisible] = useState(false);
  const [addCustomerModal, setAddCustomerModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const renderItem = ({item}) => (
    <CustomerItem
      info={item}
      onSetModalInfo={setModalInfo}
      onSetModalVisible={setModalVisible}
    />
  );

  useEffect(() => {
    getCustomer();
  }, []);
  console.log('material data', data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerPosition}>
        <Text style={styles.headerText}>Customer</Text>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => goToScreen(WELCOME_PATH, true)}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Logout</Text>
        </TouchableOpacity> */}
      </View>
      <TouchableOpacity
        style={styles.addCustButton}
        onPress={() => setAddCustomerModal(!addCustomerModal)}>
        <Text style={styles.addCustText}>Add Customer</Text>
      </TouchableOpacity>
      <CustomerInfoModal
        info={modalInfo}
        setVisible={setModalVisible}
        isVisible={modalVisible}
        delCustomer={delCustomer}
        isCustomerVisible={addCustomerModal}
        setCustomerVisible={setAddCustomerModal}
        getCustomerById={getCustomerById}
      />
      <AddCustomer
        addCustomer={addCustomer}
        isVisible={addCustomerModal}
        setVisible={setAddCustomerModal}
        dataById={dataById}
        setDataById={setDataById}
        updateCustomer={updateCustomer}
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
    marginTop: 20,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'RobotoCondensed-Bold',
    fontWeight: '900',
    color: 'white',
  },
  addCustButton: {
    backgroundColor: '#ECA6A6',
    alignItems: 'center',
    width: 130,
    margin: 16,
    padding: 12,
    alignSelf: 'center',
    // marginHorizontal: 16,
    borderRadius: 5,
  },
  addCustText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalButton: {
    alignSelf: 'center',
    // backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },

  buttonPlacement: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
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

export default CustomerScreen;
