import React from 'react';
import {View} from 'react-native';

const Flex = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 3, backgroundColor: 'pink'}} />
      <View style={{flex: 2, backgroundColor: 'violet'}} />
      <View style={{flex: 1, backgroundColor: 'purple'}} />
    </View>
  );
};

export default Flex;
