import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'

const Card2 = ({title, img, deskripsi, icon}:any) => {
  return (
    <View style={tw`bg-gray-800 rounded-xl overflow-hidden shadow-md w-38`}>
      <Image 
        source={img}
        style={tw`w-full h-24`}
      />
      <View style={tw`p-2 rounded-xl`}>
        <Text style={tw`text-xs font-bold mb-1 text-white`}>{title}</Text>
        <Text style={tw`text-[10px] text-gray-600 mb-1 text-white`}>
          {deskripsi}
        </Text>
        <View style={tw`flex-row justify-end items-center`}>
            <Text style={tw`text-white text-[10px]`}>Mulai Belajar</Text>
            <Ionicons name={icon} size={16} color="white" />
        </View>      
        </View>
    </View> 
     )
}
export default Card2