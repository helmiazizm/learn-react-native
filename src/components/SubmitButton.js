import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const SubmitButton = ({handleAddActivity, handleCancel}) => (
  <View style={styles.buttonContainer}>
    <View style={styles.buttonFlex}>
      <TouchableOpacity
        underlayColor="#efefef"
        style={styles.button}
        onPress={() => handleAddActivity()}>
        <Text style={styles.submit}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        underlayColor="#efefef"
        style={styles.buttonCancel}
        onPress={() => handleCancel()}>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonFlex: {
    flexDirection: 'row',
  },
  button: {
    // height: '25%',
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'purple',
    width: '22%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCancel: {
    // height: '25%',
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'whitesmoke',
    width: '22%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancel: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export default SubmitButton;
