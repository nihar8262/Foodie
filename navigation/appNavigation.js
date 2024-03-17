import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "../screens/HomeScreen";
import RestrauntScreen from "../screens/RestrauntScreen";
import CartScreen from "../screens/cartScreen";
import OrderPrepairingScreen from "../screens/orderPrepairingScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import CancelOrder from "../screens/CancelOrder";
import Cancelled from "../screens/Cancelled";
import Address from "../screens/Address";
import Payment from "../screens/Payment";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import UseAuth from "../hooks/useAuth";
const Stack = createNativeStackNavigator();



export default function AppNavigation() {
  const {user} = UseAuth();
  if(user){
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="splash" screenOptions={{headerShown:false}}>
              <Stack.Screen name="Home" component={HomeScreen}/>
              <Stack.Screen name="Restraunt" component={RestrauntScreen}/>
              <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen}/>
              <Stack.Screen name="Address" options={{presentation: 'fullScreenModal'}} component={Address}/>
              <Stack.Screen name="Payment" options={{presentation: 'modal'}} component={Payment}/>
              <Stack.Screen name="OrderPreparing" options={{presentation: 'fullScreenModal'}} component={OrderPrepairingScreen}/>
              <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen}/>
              <Stack.Screen name="Cancel" options={{presentation: 'fullScreenModal'}} component={CancelOrder}/>
              <Stack.Screen name="Cancelled" options={{presentation: 'fullScreenModal'}} component={Cancelled}/>
              </Stack.Navigator>
      </NavigationContainer>
    )
  }
  else{
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="splash" screenOptions={{headerShown:false}}>
              <Stack.Screen name="splash" component={SplashScreen}/>
              <Stack.Screen name="onboarding" component={OnboardingScreen}/>
              <Stack.Screen name="Login" component={LoginScreen}/>
              <Stack.Screen name="Signup" component={SignupScreen}/>
              </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
}