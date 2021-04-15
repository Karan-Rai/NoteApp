import * as React from 'react';
import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ModalScreen from '../screens/ModalScreen';
import ListScreen from '../screens/ListScreen';
import Icon from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ModalScreen">
        <Stack.Screen
          name="Home Screen"
          component={ModalScreen}
          options={{
            headerRight: () => (
              <Icon
                onPress={() => Alert.alert('This is a demo!')}
                name="md-menu"
                size={40}
                color="#900"
              />
            ),
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#148F77',
            },
          }}
        />
        <Stack.Screen
          name="Your Details"
          component={ListScreen}
          options={{
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#148F77',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
