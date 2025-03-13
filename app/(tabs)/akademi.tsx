import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card4 from '@/components/Card4'
import { Ionicons } from '@expo/vector-icons'
const akademi = () => {
  return (
    <SafeAreaView style={tw`p-4 bg-[#1e1e1e] flex-1`}>
        <ScrollView>
         <View style={tw`flex-row justify-between items-center mt-8`}>
                      <View style={tw`flex-row items-center gap-2`}>
                        <Text style={tw`text-white text-xl font-bold`}>📖 Akademi</Text>
                      </View>
                    </View>
      <View style={tw`pt-2 gap-2`}>
        
        <Card4 img={require('@/assets/images/ganjar.png')} jurusan='Keuangan Bisnis' title='Introduction of Financial Statement I' desc='4 Module' rating='⭐ 4.5 (1000)' harga='Free' warna='#d2aaae' />
        <Card4 img={require('@/assets/images/ganjar.png')} jurusan='Keuangan Bisnis' title='Introduction of Financial Statement I' desc='4 Module' rating='⭐ 4.5 (1000)' harga='Pro' warna='#ffcc00' />
        <Card4 img={require('@/assets/images/ganjar.png')} jurusan='Keuangan Bisnis' title='Introduction of Financial Statement I' desc='4 Module' rating='⭐ 4.5 (1000)' harga='Pro' warna='#ffcc00' />
        <Card4 img={require('@/assets/images/ganjar.png')} jurusan='Keuangan Bisnis' title='Introduction of Financial Statement I' desc='4 Module' rating='⭐ 4.5 (1000)' harga='Pro' warna='#ffcc00'/>
    
      


      </View> 
   
        </ScrollView>

    </SafeAreaView>  )
}

export default akademi