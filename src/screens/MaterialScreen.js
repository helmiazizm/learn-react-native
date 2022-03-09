import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const MATERIAL_SUBJECT = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Golang Fundamental',
    description: 'Learn basic of go programming language',
    duration: '9 days',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Golang SQL',
    description: 'Learn how to connect go with relational database',
    duration: '7 days',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'JavaScript',
    description: 'Learn basic of JavaScript programming language',
    duration: '5 days',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'React Fundamental',
    description: 'Learn to build single page web application',
    duration: '7 days',
  },
  {
    id: '88694a0f-3da1-471f-bd96-145571e29c34',
    title: 'React Native Fundamental',
    description: 'Learn to build multiplatform mobile application',
    duration: '6 days',
  },
  {
    id: '88694a0f-3da1-471f-bd96-145571e29c35',
    title: 'Java',
    description: 'Learn to build backend application',
    duration: '6 days',
  },
  {
    id: '88694a0f-3da1-471f-bd96-145571e29c36',
    title: 'Java Springboot',
    description: 'Learn to build backend application',
    duration: '6 days',
  },
  {
    id: '88694a0f-3da1-471f-bd96-145571e29c90',
    title: 'Flutter',
    description: 'Learn to build multiplatform mobile application',
    duration: '6 days',
  },
];

const MaterialItem = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MaterialScreen = () => {
  const renderItem = ({item}) => <MaterialItem title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MATERIAL_SUBJECT}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#9AD0EC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MaterialScreen;
