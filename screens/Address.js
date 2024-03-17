import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import {
  Octicons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Foundation,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { themeColors } from "../theme";
import tw from "twrnc";
import Checkbox from 'expo-checkbox';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const Stack = createNativeStackNavigator();

const Address = () => {

    const navigation = useNavigation();

    const [isChecked, setChecked] = useState(false);
    const [isChecked1, setChecked1] = useState(false);

    const handleDone = () => {
        navigation.navigate("orderSummary");
      };
  return (
    <SafeAreaView>
      <View style={tw`flex `}>
        {/* Header */}
        <View style={tw`flex m-5 flex-row items-center justify-between `}>
          <TouchableOpacity  onPress={() => navigation.goBack()}
           style={{ backgroundColor: themeColors.bgColor(1) }}
           className="p-1 rounded-full"
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity  >
          <View style={tw`flex flex-row items-center   `}>
            <Text style={tw`text-2xl mr-30 `}>Address</Text>
          </View>
        </View>
        {/* Line */}
        <View style={tw`bg-slate-400 h-0.4 w-100   `}></View>

         {/* Track */}
         <View style={tw`flex flex-row  m-4 justify-center`}>
            {/* Address */}
            <View style={tw`flex items-center  `}>
            <AntDesign name="checkcircle" size={24} color="rgba(251, 146, 60, 1)" />
            <Text style={tw`text-xs font-bold`}>Address</Text>
            </View>
            <Octicons name="dash" size={24} color="grey" />
            <Octicons name="dash" size={24} color="grey" />
            <Octicons name="dash" size={24} color="grey" />
            <Octicons name="dash" size={24} color="grey" />
            

            {/* Order Summary */}
            <View style={tw`flex items-center`}>
            <AntDesign name="checkcircleo" size={24} color="grey" />
            <Text style={tw`text-xs text-stone-600 `}>Order Summary</Text>
            </View>
            <Octicons name="dash" size={24} color="grey" />
            <Octicons name="dash" size={24} color="grey" />
            <Octicons name="dash" size={24} color="grey" />
            <Octicons name="dash" size={24} color="grey" />

            {/* Payment */}
            <View style={tw`flex items-center`}>
            <AntDesign name="checkcircleo" size={24} color="grey" />
            <Text style={tw`text-xs text-stone-600`}>Payment</Text>
            </View>
            
        </View>
        {/* Line */}
        <View style={tw`bg-slate-400 h-0.1 w-100  mt-1 `}></View>

        {/*Address 1*/}

        <View>
          <View>
            <Text style={tw`text-2xl  ml-12 mt-3 font-bold`}>Select Delivery Address</Text>
          </View>

          {/* Box */}
          <View>
          {/* Box */}
          <View style={tw`flex flex-row `}>
          <Checkbox
          style={tw`mt-8 ml-4`}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? themeColors.bgColor(1) : undefined}
        />

            <View className=" border-2 flex justify-center p-6 w-[80vw] ml-2 mt-5 relative rounded-md"
            style={{ borderColor: themeColors.bgColor(1)}}
            >
                <Text >House No:104,Village:Dholakpur</Text>
                <Text>Thana+post:Tehari,PIN:44021</Text>
                <Text>District:Mirzapur</Text>
                <Text>Phone:+128724568</Text>
                </View>

            <View className=" border-2 flex w-20 rounded-xl absolute bg-white top-3 left-14 text-center"
            style={{ borderColor: themeColors.bgColor(1)}}
            >
                <Text style={tw`text-center`}>Primary</Text>
            </View>
          </View>

        </View>

        </View>

        {/*Address 2*/}

        <View>
          {/* Box */}
          <View style={tw`flex flex-row `}>
          <Checkbox
          style={tw`mt-8 ml-4`}
          value={isChecked1}
          onValueChange={setChecked1}
          color={isChecked1 ? themeColors.bgColor(1) : undefined}
        />

            <View className=" border-2 flex justify-center p-6 w-[80vw] ml-2 mt-5 relative rounded-md"
            style={{ borderColor: themeColors.bgColor(1)}}
            >
                <Text >House No:104,Village:Dholakpur</Text>
                <Text>Thana+post:Tehari,PIN:44021</Text>
                <Text>District:Mirzapur</Text>
                <Text>Phone:+128724568</Text>
                </View>

            <View className=" border-2 flex w-20 rounded-xl absolute bg-white top-3 left-14 text-center"
            style={{ borderColor: themeColors.bgColor(1)}}
            >
                <Text style={tw`text-center`}>Secondary</Text>
            </View>
          </View>

        </View>

        {/* Line */}
        <View style={tw`bg-slate-400 h-0.1 w-100  mt-50 `}></View>
        {/* Button */}
        <View style={tw`items-center m-2 mt-9 `}> 
            <TouchableOpacity onPress={()=>navigation.navigate("Cart")}
              style={{ backgroundColor: themeColors.bgColor(1)}}
              className="p-4 w-[90vw]  rounded-full"
            >
              <Text
                style={tw` text-lg font-bold text-white text-center `}
              >
                Place Order
              </Text>
            </TouchableOpacity>
            </View>


      </View>
    </SafeAreaView>
  );
};

export default Address;