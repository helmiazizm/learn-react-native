import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_PATH} from '../navigation/NavigationPath';
import {logout} from '../stores/login/LoginAction';
import Icon from 'react-native-vector-icons/FontAwesome';

const PopupMenu = ({navigation}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.LoginReducer.isLoggedIn);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (isLoggedIn === false) {
      navigation.replace(LOGIN_PATH);
    }
  });

  return (
    <View>
      <Pressable
        style={{paddingLeft: 30}}
        onPress={() => setModalVisible(!modalVisible)}>
        <Icon name={'ellipsis-v'} size={16} />
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={{flex: 1}}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <Pressable
                  onPress={() => {
                    dispatch(logout());
                  }}>
                  <Text style={styles.modalText}>Logout</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    textAlign: 'center',
  },
});

export default PopupMenu;
