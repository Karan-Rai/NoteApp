import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem} from '../redux/reducer';
import Icon from 'react-native-vector-icons/Ionicons';

const nameIcon = <Icon name="md-pencil" size={30} color="#900" />;
const carIcon = <Icon name="car" size={30} color="#900" />;

function ModalScreen({navigation}) {
  const [value, setValue] = useState('');

  const [carName, setCarName] = useState('');

  const dispatch = useDispatch();

  const onSaveNote = () => {
    dispatch(addItem(value + ' ' + 'has' + ' ' + carName + ' ' + 'car.'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('/Users/karry/NoteApp/src/image/account_profile_image.png')}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.input}>
          {nameIcon}
          <TextInput
            style={styles.textInput}
            numberOfLines={1}
            placeholder="Name"
            onChangeText={value => {
              setValue(value);
            }}
            value={value}
          />
        </View>
        <View style={styles.input}>
          {carIcon}
          <TextInput
            style={styles.textInput}
            numberOfLines={1}
            placeholder="Car Name"
            onChangeText={carName => {
              setCarName(carName);
            }}
            value={carName}
          />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          disabled={value == '' ? true : false}
          onPress={() => {
            onSaveNote();
            setValue('');
            setCarName('');
          }}>
          <Text style={{fontSize: 20}}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.textPart}>
          <Text style={{fontSize: 20}}>* This app is for demo.</Text>

          <Text style={{fontSize: 20}}>
            * Please follow term and conditions to use this app.
          </Text>
        </View>
      </View>
      <View style={styles.nextScreen}>
        <TouchableOpacity onPress={() => navigation.navigate('Your Details')}>
          <Text style={{fontSize: 20, color: '#2ECC71'}}>
            Click to go to details Screen
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7E9',
  },
  header: {
    flex: 0.3,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 0.6,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flexDirection: 'row',
    fontSize: 30,
    marginBottom: 5,
    justifyContent: 'center',
    marginVertical: 10,
  },
  textInput: {
    height: 50,
    width: '80%',
    marginHorizontal: 10,
    borderBottomWidth: 1,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#A6ACAF',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textPart: {
    marginTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  nextScreen: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',

    top: 20,
  },
});
export default ModalScreen;
