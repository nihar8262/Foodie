import { View, Text, Image, StyleSheet ,Dimensions, TouchableOpacity} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import foodiee from "../assets/images/foodie.jpg"
import tw from "twrnc";
import Animated, {
  FadeIn,
  FadeOut,
  FadeInUp,
  FadeInDown,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default function SplashScreen () {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.replace("onboarding");
    }, 4000);
  }, []);
  return (
    <View className ={"flex-1 flex justify-center items-center"} style={tw`flex-1 flex justify-center items-center`}>
            {/* Background Image */}
            <Image 
              source={require('../assets/images/foodie.jpg')}
              style={tw`h-full w-full absolute `}
            />

            
            <View style={tw`  h-full w-full   bg-black/20`}>
                <Animated.View
            entering={FadeInUp.delay(300).duration(1000).springify()}
                 className="my-auto mx-auto   ">
                    <Image source={require('../assets/images/Foodie.png')}  className="mx-auto w-[75vw] h-[35vh] rounded-full"/> 
                </Animated.View>
            </View>
          </View>
    
  );
};



