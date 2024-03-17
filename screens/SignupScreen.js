import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import Animated, {
  FadeIn,
  FadeOut,
  FadeInUp,
  FadeInDown,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { themeColors } from "../theme";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
// import otpScreen from "./otpScreen";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log("got error: ", err.message);
      }
    }
  };

  return (
    <View className=" h-full w-full bg-orange-300">
      <StatusBar style="light" />
      {/* <Image
        style={tw`h-full w-full absolute`}
        source={require("../assets/images/Food.png")}
      /> */}

      {/* lights */}
      <View style={tw`flex-row justify-around w-full absolute`}>
      <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={tw`h-20 w-20 left-4 top-28 absolute`}
          source={require("../assets/images/1.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={tw`h-20 w-20 absolute left-39 top-15`}
          source={require("../assets/images/2.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={tw`h-30 w-20 absolute right-0 top-10 `}
          source={require("../assets/images/3.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={tw`h-30 w-20 absolute right-0 top-10 `}
          source={require("../assets/images/3.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={tw`h-20 w-30 absolute right-4 top-80 `}
          source={require("../assets/images/8.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={tw`h-30 w-24 absolute left-5 top-70 `}
          source={require("../assets/images/12.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(600).duration(1000).springify()}
          style={tw`h-30 w-20 absolute right-35 top-45 `}
          source={require("../assets/images/6.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(600).duration(1000).springify()}
          style={tw`h-30 w-20 absolute right-40 top-100 `}
          source={require("../assets/images/7.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(600).duration(1000).springify()}
          style={tw`h-20 w-20 absolute left-0 top-130 `}
          source={require("../assets/images/4.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(800).duration(1000).springify()}
          style={tw`h-30 w-20 absolute right-0 top-130 `}
          source={require("../assets/images/9.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(800).duration(1000).springify()}
          style={tw`h-20 w-22 absolute left-0 top-175 `}
          source={require("../assets/images/10.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(800).duration(1000).springify()}
          style={tw`h-20 w-22 absolute right-5 top-195 `}
          source={require("../assets/images/11.png")}
        />
      </View>

      {/* title & form */}
      <View style={tw`flex justify-around h-full w-full pt-20 `}>
        {/* title */}
        <View style={tw`flex items-center`}>
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={tw`text-white font-extrabold  text-7xl`}
          >
            SignUp
          </Animated.Text>
        </View>
        {/* form */}

        <View style={tw`flex items-center  mx-4 `}>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={tw`bg-white/70 p-3 rounded-2xl w-full mb-5`}
          >
            <TextInput placeholder="Name" placeholderTextColor={"black"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={tw`bg-white/70 p-3 rounded-2xl w-full mb-5`}
          >
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
              placeholderTextColor={"black"}
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={tw`bg-white/70 p-3 rounded-2xl w-full mb-5`}
          >
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(value) => setPassword(value)}
              placeholderTextColor={"black"}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-4"
            >
                {
                    showPassword? 
                    <Feather name="eye" size={20} color="black" />
                    :
                    <Feather name="eye-off" size={20} color="black" />
                }
            </TouchableOpacity>
          </Animated.View>

          {/* button */}
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={tw`w-full`}
          >
            <TouchableOpacity
              onPress={handleSubmit}
              style={[tw`w-full bg-red-700 p-3 rounded-2xl `,{backgroundColor:themeColors.bgColor(1)}]}
            >
              <Text style={tw`text-xl font-bold text-white text-center`}>
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={tw`flex-row justify-center mt-4`}
          >
            <Text style={tw`text-white `}>Already have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}
            >
              <Text style={tw`text-orange-600 font-bold`}>Login</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* other signup option */}

          <View
            style={tw`flex-row justify-between items-center gap-8 p-2 mt-1`}
          >
            <Animated.View
              entering={FadeInDown.delay(800).duration(1000).springify()}
            >
              <TouchableOpacity style={tw`bg-white/70 p-2 rounded-full`}>
                <Animated.Image
                  entering={FadeInDown.delay(800).duration(1000).springify()}
                  style={tw`h-10 w-10`}
                  source={require("../assets/images/google.png")}
                />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(800).duration(1000).springify()}
            >
              <TouchableOpacity style={tw`bg-white/70 p-2 rounded-full`}>
                <Animated.Image
                  entering={FadeInDown.delay(800).duration(1000).springify()}
                  style={tw`h-10 w-10`}
                  source={require("../assets/images/phone.png")}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(800).duration(1000).springify()}
            >
              <TouchableOpacity style={tw`bg-white/70 p-2 rounded-full`}>
                <Animated.Image
                  entering={FadeInDown.delay(800).duration(1000).springify()}
                  style={tw`h-10 w-10`}
                  source={require("../assets/images/facebook.png")}
                />
              </TouchableOpacity>
            </Animated.View>

            
          </View>
        </View>
      </View>
    </View>
  );
}