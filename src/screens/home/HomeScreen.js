import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FooterBar from '../../components/FooterBar';

const HomeScreen = () => {
  const renderItem = ({item}) => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerPosition}>
        <Text style={styles.headerText}>Welcome</Text>
      </View>
      <Image
        source={require('../../assets/Images/undraw_People_re_8spw.png')}
        style={{height: 256, width: 288, alignSelf: 'center'}}
      />
      {/* <FlatList data={[]} renderItem={renderItem} /> */}
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <FooterBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D77FA1',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerPosition: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginVertical: 20,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'RobotoCondensed-Bold',
    fontWeight: '900',
    color: 'white',
  },
});

export default HomeScreen;
