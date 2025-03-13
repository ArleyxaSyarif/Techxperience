import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const MemberCard2 = ({bulan, harga, bayar}: any) => {
  return (
    <View style={tw`p-4 bg-white rounded-xl shadow-md w-80 h-20`}>
      <Text style={tw`text-lg font-bold`}>{bulan}</Text>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-base`}>{harga}</Text>
        <Text style={tw`text-base`}>{bayar}</Text>
      </View>
    </View>  
    )
}

export default MemberCard2

const styles = StyleSheet.create({})