import * as React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/index';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
import { Provider } from './src/context/BlogContext';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IndexScreen">
          <Stack.Screen name="IndexScreen" component={IndexScreen}
            options={({ navigation }) => ({
              title: 'BlogList', headerTitleAlign: "center",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
                  <Text style={{ margin: 15 }}>Go</Text>
                </TouchableOpacity>
              ),
            })
            }
          />
          <Stack.Screen name="ShowScreen" component={ShowScreen}
            options={({ route, navigation }) => ({
              title: 'Blog', headerTitleAlign: "center",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('EditScreen', { id: route.params.id })}>
                  <Text style={{ margin: 15 }}>Edit</Text>
                </TouchableOpacity>
              ),
            })
            }
          />
          <Stack.Screen name="CreateScreen" component={CreateScreen}
            options={{ title: 'Create', headerTitleAlign: "center" }}
          />

          <Stack.Screen name="EditScreen" component={EditScreen}
            options={{ title: 'Edit', headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;