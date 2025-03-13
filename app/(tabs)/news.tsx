import { View, Text, TextInput, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'
import NewsCard from '@/components/NewsCard'
import NewsCard2 from '@/components/NewsCard2'

const news = () => {
  return (
    <SafeAreaView style={tw`p-2 bg-[#1e1e1e] flex-1 mt-5`}>
        <ScrollView>
    <View>
      <View style={tw`p-2`}>
        <Text style={tw`text-2xl font-bold mb-2 text-white`}>News</Text>
        <View style={tw`bg-transparent border border-gray-400 rounded-lg p-1 mt-5 flex-row items-center`}>
          <TextInput
            placeholder="Mau cari berita apa hari ini? ..."
            style={tw`h-9 flex-1 text-gray-400`}
            placeholderTextColor="#808080"
          />
          <Ionicons name="search" size={20} color="white" />
        </View>
      </View>  
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <NewsCard img={require('@/assets/images/ganjar.png')} title='India sebar developernya keseluruh dunia, dengan bayaran murah' date='12 Desember 2022'/>  

              <NewsCard img={require('@/assets/images/ganjar.png')} title='India sebar developernya keseluruh dunia, dengan bayaran murah' date='12 Desember 2022'/>  
            </ScrollView> 


            <View style={tw`mt-5`}>
                <NewsCard2 img={require('@/assets/images/ganjar.png')} title='India sebar developernya keseluruh dunia, dengan bayaran murah' date='12 Desember 2022'/>    
                <NewsCard2 img={require('@/assets/images/ganjar.png')} title='India sebar developernya keseluruh dunia, dengan bayaran murah' date='12 Desember 2022'/>    
                <NewsCard2 img={require('@/assets/images/ganjar.png')} title='India sebar developernya keseluruh dunia, dengan bayaran murah' date='12 Desember 2022'/>    
                <NewsCard2 img={require('@/assets/images/ganjar.png')} title='India sebar developernya keseluruh dunia, dengan bayaran murah' date='12 Desember 2022'/>    

            </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )}

export default news