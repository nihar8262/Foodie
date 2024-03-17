import { View, Text, Image, StyleSheet ,Dimensions, TouchableOpacity} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import foodiee from "../assets/images/foodie.jpg"
import tw from "twrnc";

const { width, height } = Dimensions.get("window");

export default function SplashScreen () {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.replace("onboarding");
    }, 3000);
  }, []);
  return (
    <View className ={"flex-1 flex justify-center items-center"} style={tw`flex-1 flex justify-center items-center`}>
            {/* Background Image */}
            <Image 
              source={require('../assets/images/foodie.jpg')}
              style={tw`h-full w-full absolute `}
            />

            
            <View style={tw`  h-full w-full   bg-black/20`}>
                <View className="my-auto mx-auto p-7 bg-yellow-600 rounded-full  ">
                    <Image source={require('../assets/images/Foodie.png')}  className="mx-auto"/> 
                </View>
            </View>
          </View>
    
  );
};



