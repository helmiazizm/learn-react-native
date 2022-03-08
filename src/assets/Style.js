import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#c0c0c0',
  },
  header: {
    fontSize: 40,
    fontWeight: '600',
    fontFamily: 'sans-serif-light',
    color: '#000000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: '25%',
    width: '90%',
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
  },
});

export default Style;
