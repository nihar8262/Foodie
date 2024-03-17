import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../api';
import { urlFor } from '../sanity';
import tw from 'twrnc'


export default function Categories() {
    const [activeCategory,setActiveCategory]=useState(null);
    let [categories,setCategories]= useState([]);
    useEffect(()=>{
      getCategories().then(data=>{
        setCategories(data);
      })
    },[])
  return (
    <View className="mt-4">
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible"
          contentContainerStyle={{
            paddingHorizontal:15
          }}
          >
            {
                categories.map((categories,index)=>{
                    let isActive = categories._id==activeCategory;
                    let btnClass = isActive? 'bg-gray-600' : 'bg-gray-200';
                    let textClass = isActive? 'font-extrabold text-gray-800 ': 'text-gray-500'
                    return(
                        <View key={index} className="flex justify-center items-center mr-6" style={tw`flex justify-center items-center mr-6`}>
                            <TouchableOpacity
                            onPress={()=>setActiveCategory(categories._id)}
                            className={"p-1 rounded-full "+btnClass}>
                                <Image style={{width:45, height:45}}
                                 source={{uri: urlFor(categories.image).url()}}
                                 />
                                
                            </TouchableOpacity>
                            <Text className={"text-sm"+textClass}>{categories.name}</Text>
                        </View>
                    )
                })
            }
          </ScrollView>
    </View>
  )
}