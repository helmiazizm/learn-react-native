import React from 'react';
import {Text, TouchableOpacity, View, Button} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

const ToDoList = () => {
  const Texts = filling => {
    return <Text style={{marginRight: 36}}>{filling}</Text>;
  };

  const ButtonDone = (
    <TouchableOpacity style={{flex: 1, marginHorizontal: 12}}>
      <Text style={{color: 'green'}}>Done</Text>
    </TouchableOpacity>
  );

  const ButtonDelete = (
    <TouchableOpacity style={{flex: 1, marginHorizontal: 12}}>
      <Text style={{color: 'red'}}>Delete</Text>
    </TouchableOpacity>
  );

  const data = [
    [Texts('Learn React'), ButtonDone, ButtonDelete],
    [Texts('Learn React Native'), ButtonDone, ButtonDelete],
    [Texts('Learn Redux'), ButtonDone, ButtonDelete],
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        marginVertical: 20,
      }}>
      {data.map((value, index) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'space-between',
            }}>
            {data[index].map((element, i) => {
              return <View key={i / 10}>{element}</View>;
            })}
          </View>
        );
      })}
      <View
        style={{
          marginVertical: 20,
          width: 100,
          flexDirection: 'column-reverse',
        }}>
        <Button title="submit" color="grey" />
      </View>
    </View>
  );
};

export default ToDoList;
