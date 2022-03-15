import React from 'react'
import {View, FlatList} from 'react-native'
import ToDo from "./ToDo";

const ToDoList = ({todos}) => {

    let todoItems = ({item}) => {
        return(
            <ToDo todo={item}/>
        )
    }
    return (
        <View>
            <FlatList
            data={todos}
            renderItem={todoItems}
            keyExtractor={item => item.todoIndex}
            />
        </View>
    )
}
export default ToDoList;
