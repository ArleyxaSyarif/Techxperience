import { Image, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const NewsCard = ({img, title, date}: any) => {
  return (
    <View style={tw`bg-transparent rounded-lg overflow-hidden my-2 mx-2`}>
      <Image
        style={tw`w-80 h-[150px]`}
        source={img}
        width={300}
        height={200}
      />
        <Text numberOfLines={3} style={tw`text-base font-bold mb-1 text-blue-500 w-80 mt-2`}>{title}</Text>
        <Text style={tw`text-xs text-gray-400`}>{date}</Text>     
        </View>  )
}

export default NewsCard