import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { useDispatch } from 'react-redux';
import ToDoButton from "../components/ToDoButton";
import { deleteTodo, toggleComplete } from '../stores/todo/ToDoAction';

const ToDo = ({todo}) => {
    const dispatch = useDispatch();

    const onToDoComplete = (idx) => {
        dispatch(toggleComplete(idx))
    }

    const onToDoDelete = (idx) => {
        dispatch(deleteTodo(idx))
    }
    return(
    <View style={styles.todoContainer}>
        <Text style={[styles.todoText, todo.complete ? styles.completeTodoText : null]}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
        <ToDoButton
                name='Done'
                onPress={() => onToDoComplete(todo.todoIndex)}/>
            <ToDoButton
                name='Delete'
                onPress={() => onToDoDelete(todo.todoIndex)}/>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 3, height: 3},
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 16
    },
    completeTodoText: {
        textDecorationLine: 'line-through'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
})
export default ToDo;
