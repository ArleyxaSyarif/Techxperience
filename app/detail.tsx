import Button from '@/components/Button';
import DetailCard from '@/components/DetailCard';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from 'react-native-youtube-iframe';
import tw from 'twrnc';

const detail = () => {
  return (
    <SafeAreaView style={tw`p-4 bg-[#1e1e1e] flex-1`}>
      <ScrollView>
    <View>
      <View style={tw`w-full h-44 bg-black`}>
      <YoutubePlayer
        height={200}
        play={false}
        videoId={"tzD9OxAHtzU"} // Ganti dengan YouTube video ID
      />
      </View>
      <View style={tw`p-4`}>
        <Text style={tw`text-xl font-bold text-blue-500`}>Mahir Menjadi Frontend Dev</Text>
        <Text style={tw`mt-2 text-white`}>Bergabung dengan kelar mahir menjadi frontend dev, maka kamu sudah mendapatkan fundamental menjadi seorang programmer, dan pada kelas ini kamu akan mendalami itu. </Text>
        <View style={tw`flex-row mt-2 items-center`}>
          <Text style={tw`text-yellow-400 text-sm`}>★</Text>
          <Text style={tw`text-gray-400 ml-1 text-sm`}>4.5 (823)</Text>
          <Text style={tw`text-gray-400 ml-5 text-sm`}>4 Module</Text>
          <Text style={tw`text-gray-400 ml-5 text-sm`}>1.234 Programmer</Text>
        </View>              
        </View> 

        <View style={tw`bg-white h-80`}>
          <DetailCard img={require('@/assets/images/foto1.png')} title="Fundamentals for Frontend Dev" minutes="30 minutes" />
          <DetailCard img={require('@/assets/images/foto1.png')} title="Crafting the Perfect Web With HTML CSS " minutes="1 hour 20 minutes" />
          <DetailCard img={require('@/assets/images/foto1.png')} title="Using JavaScript for Interaction Website" minutes="45 minutes" />
          <DetailCard img={require('@/assets/images/foto1.png')} title="Using framework for build website SPAs" minutes="1 hour 3 minutes" />

        </View>   

        <View style={tw`mt-4`}>
          <Button text="Mulai Kelas" bgColor="bg-blue-500" rute="" />
        </View>      
        
        </View>
      </ScrollView>
      </SafeAreaView>  
    );
};

export default detail;
