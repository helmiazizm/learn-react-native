import React from 'react';
import {View} from 'react-native';
import Header from './Header';

const HomeScreen = ({styles}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.container}>
        <Header styles={styles} />
      </View>
    </View>
  );
};

export default HomeScreen;
