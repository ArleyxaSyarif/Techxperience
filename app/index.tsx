import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Button from '@/components/Button'
import { Link } from 'expo-router'
import { useRoute } from '@react-navigation/native'

const index = () => {



  return (
    <SafeAreaView style={tw`p-4 bg-[#1e1e1e] flex-1`}>
            
        <View style={tw`mt-50`}>
            <Image source={require('@/assets/images/icon2.png')} style={tw`w-full h-20`} />
            
            <Text style={tw`text-white text-2xl text-center mt-12 font-bold`}>Belajar Technology</Text>
            <Text style={tw`text-white text-2xl text-center font-bold`}>& Dapatkan Pengalamannya</Text>

            <Text style={tw`text-white text-center p-4`}>Belajar di Techxperience ini kamu dapat belajar berbagai bidang teknologi seperti pemrograman, desain grafis, dan jaringan.</Text>

            
        </View>
            <View style={tw`bg-[#1e1e1e] border border-white p-4 rounded-2 mt-12 flex-row justify-center items-center w-80 self-center`}>
                <Text style={tw`text-white font-bold`}>Mulai Belajar Sekarang</Text>
            </View>

                    <Button text='Masuk' bgColor='bg-blue-500 mt-4 p-4 w-80 self-center' rute='/auth/login'/>
            
            <Text style={tw`text-gray-400 text-center mt-4 `}>#Dari 1 Baris Pertama, Sampai 1 Project Pertama</Text>

    </SafeAreaView>
  )
}

export default index