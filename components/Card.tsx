import { Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

  const Card = ({title, icon}:any) => {
    return (
      <View style={tw`flex-row bg-blue-500 rounded-lg my-1.5 shadow-md w-40`}>
        <View style={tw`w-1.5 bg-blue-500 rounded-l-lg`}></View>
        <View style={tw`flex-1 bg-gray-700 flex-row rounded-r-lg rounded-l-lg items-center p-3`}>
        <View style={tw`me-3`}>
            {icon}
          </View>
          <Text style={tw`text-sm font-medium text-white ml-1.5`}>{title}</Text>
          
        </View>      
        </View>   
        )
  }

export default Card