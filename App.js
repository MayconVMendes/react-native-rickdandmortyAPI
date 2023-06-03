import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./src/components/screen/Home";
import Episode from "./src/components/screen/Episode";
import Location from "./src/components/screen/Location";
import Character from "./src/components/screen/Character";

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tela inicial"
          component={Home}
        />
        <Stack.Screen
          name="Episódios"
          component={Episode}
        />
        <Stack.Screen
          name="Personagens"
          component={Character}
        />
        <Stack.Screen
          name="Localizações"
          component={Location}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
