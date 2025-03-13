import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const MemberCard = ({img, title}: any) => {
  return (
    <View style={tw`flex-row items-center`}>
      <Image 
        source={img}
        style={tw`w-12 h-12 rounded-full mr-4`}
      />
      <View style={tw`flex-1`}>
        <Text style={tw`text-sm font-sm flex-wrap`} numberOfLines={2}>{title}</Text>
      </View>    
      </View>  
      )
}

export default MemberCard

const styles = StyleSheet.create({})