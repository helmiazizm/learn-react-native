import React, {useEffect} from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const AddTable = ({
  addTable,
  isVisible,
  setVisible,
  dataById,
  setDataById,
  updateTable,
}) => {
  const addTableSchema = Yup.object({
    id: Yup.string().required('ID required'),
    nomor: Yup.string().required('Number required'),
    status: Yup.string()
      .required('Status required')
      .matches(
        'Available' || 'Unavailable',
        'Fill with either Available or Unavailable',
      ),
  });

  const formik = useFormik({
    initialValues: {
      id: '',
      nomor: '',
      status: '',
    },
    validationSchema: addTableSchema,
    onSubmit: async values => {
      if (dataById.id) {
        await updateTable(values);
        setVisible(!isVisible);
        setDataById({});
      } else {
        await addTable(values);
        setVisible(!isVisible);
        setDataById({});
      }
      setFieldValue('id', '');
      setFieldValue('nomor', '');
      setFieldValue('status', '');
    },
  });

  useEffect(() => {
    if (dataById.id) {
      setFieldValue('id', dataById.id);
      setFieldValue('nomor', dataById.nomor);
      setFieldValue('status', `${dataById.status}`);
    }
  }, [dataById.id]);

  console.log('dataByid', dataById);

  const {setFieldValue, handleBlur, errors, touched, handleSubmit, values} =
    formik;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setVisible(!isVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.labelPlacement}>
            <Text style={styles.textLabel}>ID</Text>
            <Text style={styles.warning}>
              {errors.id && touched.id ? errors.id : null}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={e => setFieldValue('id', e)}
            onBlur={handleBlur('id')}
            value={values.id}
            editable={dataById.id ? false : true}
          />
          <View style={styles.labelPlacement}>
            <Text style={styles.textLabel}>Nomor</Text>
            <Text style={styles.warning}>
              {errors.nomor && touched.nomor ? errors.nomor : null}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={e => setFieldValue('nomor', e)}
            value={values.nomor}
          />
          <View style={styles.labelPlacement}>
            <Text style={styles.textLabel}>Status</Text>
            <Text style={styles.warning}>
              {errors.status && touched.status ? errors.status : null}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={e => setFieldValue('status', e)}
            value={values.status}
          />
          <View style={styles.buttonPlacement}>
            <Button
              onPress={() => {
                handleSubmit();
                console.log('valuemenu', values);
              }}
              title="submit"
              color="green"
            />
            <Button
              onPress={() => {
                setVisible(!isVisible);
                setDataById({});
                setFieldValue('id', '');
                setFieldValue('nomor', '');
                setFieldValue('status', '');
              }}
              title="cancel"
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    resizeMode: 'contain',
    // height: '60%',
  },
  labelPlacement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLabel: {
    // fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    // height: '10%',
    borderRadius: 5,
    borderColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  warning: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  buttonPlacement: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});

export default AddTable;
