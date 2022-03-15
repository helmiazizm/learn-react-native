import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const Input = ({
  placeholder = '',
  isSecureText = false,
  currentValue = '',
  onInputChange,
}) => {
  const onChangeText = text => {
    onInputChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        accessibilityHint="input"
        value={currentValue}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#CACACA"
        selectionColor="#666666"
        secureTextEntry={isSecureText}
        onChangeText={onChangeText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    //Shadowing for IOS
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 3, height: 3},
    //Shadowing for Android
    elevation: 3,
    //Mandatory style for shadowing
    backgroundColor: '#ffffff',
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default Input;
