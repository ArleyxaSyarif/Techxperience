import { Image, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const DetailCard = ({img, title, minutes}: any) => {
  return (
    <View style={tw`flex-row p-2.5 items-center`}>
    
    <Image 
        source={img}
        style={tw`w-15 h-15 rounded-lg`}
      />
      <View style={tw`ml-4 flex-1`}>
        <Text numberOfLines={1} style={tw`text-sm font-bold`}>{title}</Text>
        <Text style={tw`text-sm mt-1.5 text-[#666]`}>{minutes}</Text>
      </View>    
      </View>
  )
}
export default DetailCard