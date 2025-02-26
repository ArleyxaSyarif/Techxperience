import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'

const Button = ({text, bgColor, rute}:any) => {

  const navigation = useRouter();


  return (
    <TouchableOpacity onPress={() => navigation.navigate(rute)} style={tw`p-2.5 rounded-lg items-center justify-center ${bgColor}`}  >
      <Text style={tw`text-white text-base font-bold`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button