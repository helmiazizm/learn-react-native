import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TabBarItem from '../components/TabBarItem';

const TabBar = () => {
  let items = ['All', 'Finished', 'Unfinished'];
  const dispatch = useDispatch();
  const setScreen = act => dispatch({type: act});
  const screen = useSelector(state => state.screen.list);

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return (
          <TabBarItem
            list={screen}
            key={`tabbaritem${index}`}
            text={item}
            index={index}
            setList={setScreen}
          />
        );
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
