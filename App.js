import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DataProvider } from './context';
import HomeScreen from './HomeScreen';
import location from './location';
import ProfileScreen from './ProfileScreen';
import trip from './trip';
import CompleteScreen from './CompleteScreen';
import QrScreen from './QRGenerator';
import newc from './Newcost';
import Ongoing from './ongoing';

const Stack = createStackNavigator();

function App() {
  return (
    <DataProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="location" component={location} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="qr" component={QrScreen} />
        <Stack.Screen 
          name="trip" 
          component={trip} 
          options={{ 
            headerLeft: null,
            gestureEnabled: false 
          }}
        />
        <Stack.Screen name="Complete" component={CompleteScreen} />
        <Stack.Screen name="new" component={newc} />
        <Stack.Screen name="ongoing" component={Ongoing} />
      </Stack.Navigator>
    </NavigationContainer>
    </DataProvider>
  );
}

export default App;
