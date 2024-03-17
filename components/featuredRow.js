import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestrauntCard from './restrauntCard'
import tw from 'twrnc'
import Animated, {
  FadeInLeft,
} from "react-native-reanimated";

export default function FeaturedRow({title,description,restraunts}) {
  return (
    <View>
      <View style={tw`flex-row justify-between items-center px-4`}>
        <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color:themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={{
            paddingHorizontal:15
         }}
         >
            {
                restraunts.map((restraunt,index)=>{
                    return(
                        <RestrauntCard 
                         item={restraunt}
                         key={index}
                        />
                    )
                })
            }
         </ScrollView>
    </View>
  )
}