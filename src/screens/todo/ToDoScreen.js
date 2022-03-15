import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import ToDoList from '../../containers/ToDoList';
import SubmitButton from '../../components/SubmitButton';
import TabBar from '../../containers/TabBar';
import {useSelector} from 'react-redux';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import languages from '../../utils/languages';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MessageBox} from '../../containers/MessageBox';

const ToDoScreen = ({todo}) => {
  const [todoName, setTodoName] = useState('');
  const {onSubmitTodo, onDismissError, getVisibleTodos} = todo();
  const error = useSelector(state => state.AppReducer.error);

  useEffect(() => {
    if (error) {
      MessageBox('Error', error, () => onDismissError()).showAlert();
    }
  });

  const submitTodo = () => {
    onSubmitTodo(todoName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.content}>
          <Heading />
          <Input
            placeholder={languages.en.todoInput}
            currentValue={todoName}
            onInputChange={setTodoName}
          />
          <SubmitButton onSubmit={submitTodo} />
          <View style={styles.content}>
            <ToDoList todos={getVisibleTodos()} />
          </View>
          <TabBar />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 10,
  },
});

export default ToDoScreen;
