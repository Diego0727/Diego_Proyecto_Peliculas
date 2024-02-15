import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from './src/pages/home/home'
import Series from './src/pages/series/series';
import Peliculas from './src/pages/peliculas/peliculas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




