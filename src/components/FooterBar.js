import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {goToScreen} from '../navigation/NavigationHelper';
import {
  CUSTOMER_PATH,
  HOME_PATH,
  MENU_PATH,
  TABLE_PATH,
} from '../navigation/NavigationPath';
import Logout from './Logout';

const FooterBarItem = ({screen, text, index}) => {
  return (
    <TouchableOpacity
      style={[styles.item]}
      onPress={() => goToScreen(screen[index], true)}>
      <Text style={[styles.itemText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const FooterBar = () => {
  let items = ['Home', 'Menus', 'Tables', 'Customers'];
  const screen = [HOME_PATH, MENU_PATH, TABLE_PATH, CUSTOMER_PATH];
  const [modalDropdownValue, setModalDropdownValue] = useState(0);

  const handleModalDropdown = index => {
    setModalDropdownValue(index);
    goToScreen(screen[index], true);
  };

  return (
    <View style={styles.container}>
      {/* {items.map((item, index) => {
        return (
          <FooterBarItem
            screen={screen}
            key={`footerbaritem${index}`}
            text={item}
            index={index}
          />
        );
      })}
      <Logout /> */}
      <ModalDropdown
        defaultValue="Go To"
        options={items}
        style={styles.item}
        onSelect={index => goToScreen(screen[index], true)}
        textStyle={styles.itemText}
        dropdownStyle={{width: 200, alignSelf: 'center'}}
        dropdownTextStyle={{color: 'black', fontSize: 16}}
      />
      <Logout />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  border: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#dddddd',
  },
  itemText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: 'whitesmoke',
  },
});
export default FooterBar;
