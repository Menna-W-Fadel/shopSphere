import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/features/home/screens/HomeScreen";
import ProductDetailsScreen from "@/features/products/screens/ProductDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import BrowseProducts from "@/features/products/screens/BrowseProducts";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="productDetails"
          component={ProductDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="browseProducts" component={BrowseProducts}
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
