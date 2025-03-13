import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import MemberCard from '@/components/MemberCard'
import MemberCard2 from '@/components/MemberCard2'
import Button from '@/components/Button'
const member = () => {
  return (
    <SafeAreaView style={tw`p-2 bg-[#1e1e1e] flex-1 mt-5 `}>
      <ScrollView>
    <View style={tw`flex-1 items-center `}>
      <Text style={tw`text-white text-xl font-bold`}>Start Your 7-Free Trial Today!</Text>
      <Text style={tw`text-gray-400 text-sm`}>Buka Fitur Eksklusif dengan Techxperience Membership</Text>
    </View>


    <View style={tw` h-160 w-full bg-neutral-200 rounded-t-[40px] shadow-lg mt-12`}>
      <Text style={tw`mt-8 text-center text-xl font-bold`}>Kamu akan mendapatkan:</Text>

      <View style={tw`p-4 gap-2`}>
        <MemberCard img={require('@/assets/images/foto1.png')} title="Akses ke Semua Modul Pembelajaran" />
        <MemberCard img={require('@/assets/images/icon.png')} title="Jalur Pembelajaran yang dirancang oleh mentor" />
        <MemberCard img={require('@/assets/images/facebook.png')} title="Mentoring sebulan 4x pertemuan" />
        <MemberCard img={require('@/assets/images/ganjar.png')} title="Mendapatkan sertifikat dan keuntungan lainnya" />
      </View>

          <View style={tw`items-center gap-2`}>
            <MemberCard2 bulan="12 Bulan" harga="Rp 599.000,00" bayar="Rp 12.475,00 / minggu"/> 
            <MemberCard2 bulan="12 Bulan" harga="Rp 599.000,00" bayar="Rp 12.475,00 / minggu"/>    
            <MemberCard2 bulan="12 Bulan" harga="Rp 599.000,00" bayar="Rp 12.475,00 / minggu"/>    
   
            
        </View> 
          <View style={tw`mt-4 w-80 self-center`}>
            <Button text="Mulai Kelas" bgColor="bg-blue-500" rute="" />
          </View>     
        </View>
          </ScrollView>
    </SafeAreaView>  
    )
}

export default member