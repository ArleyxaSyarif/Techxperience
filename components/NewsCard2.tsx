import { Image, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const NewsCard2 = ({img, title, date}: any) => {
  return (
    <View style={tw`flex-row p-2.5 items-center`}>
    
    <Image 
        source={img}
        style={tw`w-20 h-20 rounded-lg`}
      />
      <View style={tw`ml-4 flex-1`}>
        <Text numberOfLines={3} style={tw`text-sm font-bold text-blue-500`}>{title}</Text>
        <Text style={tw`text-sm mt-5 text-[#666]`}>{date}</Text>
      </View>    
      </View>
  )
}

export default NewsCard2