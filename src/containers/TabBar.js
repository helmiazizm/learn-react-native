import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabBarItem from '../components/TabBarItem';

const TabBar = ({setList}) => {
  let items = ['All', 'Finished', 'Unfinished'];

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return <TabBarItem text={item} index={index} setList={setList} />;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopColor: '#dddddd',
  },
});
export default TabBar;
