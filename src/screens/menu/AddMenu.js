import React, {useEffect, useState} from 'react';
import {Button, Modal, StyleSheet, Text, View, TextInput} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const AddMenu = ({
  addMenu,
  setDataById,
  isVisible,
  setVisible,
  updateMenu,
  dataById,
}) => {
  const addMenuSchema = Yup.object({
    id: Yup.string().required('ID required'),
    name: Yup.string().required('Name required'),
    price: Yup.string()
      .required('Price required')
      .matches(/^\d+$/, 'Field should not have characters'),
  });

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      price: '',
    },
    validationSchema: addMenuSchema,
    onSubmit: async values => {
      if (dataById.id) {
        await updateMenu(values);
        setVisible(!isVisible);
        setDataById({});
      } else {
        await addMenu(values);
        setVisible(!isVisible);
        setDataById({});
      }
      setFieldValue('id', '');
      setFieldValue('name', '');
      setFieldValue('price', '');
    },
  });

  useEffect(() => {
    if (dataById.id) {
      setFieldValue('id', dataById.id);
      setFieldValue('name', dataById.name);
      setFieldValue('price', `${dataById.price}`);
    }
  }, [dataById.id]);

  console.log('databyid', dataById);

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
            <Text style={styles.textLabel}>Name</Text>
            <Text style={styles.warning}>
              {errors.name && touched.name ? errors.name : null}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={e => setFieldValue('name', e)}
            value={values.name}
          />
          <View style={styles.labelPlacement}>
            <Text style={styles.textLabel}>Price</Text>
            <Text style={styles.warning}>
              {errors.price && touched.price ? errors.price : null}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={e => setFieldValue('price', e)}
            value={values.price}
          />
          <View style={styles.buttonPlacement}>
            <Button
              onPress={() => {
                handleSubmit();
                console.log(values);
              }}
              title="submit"
              color="green"
            />
            <Button
              onPress={() => {
                setVisible(!isVisible);
                setDataById({});
                setFieldValue('id', '');
                setFieldValue('name', '');
                setFieldValue('price', '');
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
    // resizeMode: 'contain',
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

export default AddMenu;
