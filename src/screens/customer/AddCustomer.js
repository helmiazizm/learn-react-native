import React, {useEffect} from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const AddCustomer = ({
  addCustomer,
  isVisible,
  setVisible,
  dataById,
  setDataById,
  updateCustomer,
}) => {
  const addCustomerSchema = Yup.object({
    id: Yup.string().required('ID required'),
    nama: Yup.string().required('Name required'),
    email: Yup.string().required('Email required').email('Email invalid'),
    alamat: Yup.string().required('Address required'),
  });

  const formik = useFormik({
    initialValues: {
      id: '',
      nama: '',
      email: '',
      alamat: '',
    },
    validationSchema: addCustomerSchema,
    onSubmit: async values => {
      if (dataById.id) {
        await updateCustomer(values);
        setVisible(!isVisible);
        setDataById({});
      } else {
        await addCustomer(values);
        setVisible(!isVisible);
        setDataById({});
      }
      setFieldValue('id', '');
      setFieldValue('nama', '');
      setFieldValue('email', '');
      setFieldValue('alamat', '');
    },
  });

  useEffect(() => {
    if (dataById.id) {
      setFieldValue('id', dataById.id);
      setFieldValue('nama', dataById.nama);
      setFieldValue('email', dataById.email);
      setFieldValue('alamat', dataById.alamat);
    }
  }, [dataById.id]);

  const {setFieldValue, handleBlur, errors, touched, handleSubmit, values} =
    formik;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      // statusBarTranslucent={true}
      onRequestClose={() => {
        setVisible(!isVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.labelPlacement}>
            <Text style={styles.textLabel}>ID </Text>
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
            <Text style={styles.textLabel}>Nama </Text>
            <Text style={styles.warning}>
              {errors.nama && touched.nama ? errors.nama : null}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={e => setFieldValue('nama', e)}
            value={values.nama}
          />
          <View style={styles.labelPlacement}>
            <Text style={styles.textLabel}>Email </Text>
            <Text style={styles.warning}>
              {errors.email && touched.email ? errors.email : null}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={e => setFieldValue('email', e)}
            value={values.email}
          />
          <View style={styles.labelPlacement}>
            <Text style={styles.textLabel}>Alamat</Text>
            <Text style={styles.warning}>
              {errors.alamat && touched.alamat ? errors.alamat : null}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={e => setFieldValue('alamat', e)}
            value={values.alamat}
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
                setFieldValue('nama', '');
                setFieldValue('email', '');
                setFieldValue('alamat', '');
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

export default AddCustomer;
