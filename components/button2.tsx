import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const Button2 = ({text, img}:any) => {
  return (
    <View>
       <TouchableOpacity style={tw`bg-white p-4 rounded-lg flex-row items-center justify-center w-80`}>
                  <Image source={img} style={tw`w-6 h-6 mr-2`} />
                  <Text style={tw`text-black`}>{text}</Text>
                </TouchableOpacity>
                
    </View>
  )
}

export default Button2

const styles = StyleSheet.create({})