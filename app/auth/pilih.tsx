import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { create } from 'twrnc';
import { useRouter } from 'expo-router';
import Button from '@/components/Button';

const tw = create();

const pilih = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useRouter();
  const options = [
    'Co-Founders',
    'Instagram',
    'Tiktok',
    'Youtube',
    'Website',
    'Lainnya'
  ];
  return (
   <SafeAreaView style={tw`flex-1 bg-black`}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={tw`flex-1 px-4`}>
        <View style={tw`flex-1`}>
          <Text style={tw`text-white text-base mb-6 text-center mt-10`}>
            Bagaimana kamu tahu tentang Techxperience?
          </Text>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={tw`bg-[#1C1C1E] mb-4 p-4 rounded-lg ${
                selectedOption === option ? 'border-2 border-[#0086FF]' : ''
              }`}
              onPress={() => setSelectedOption(option)}
            >

              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-white text-lg`}>{option}</Text>
                <View

                  style={tw`w-5 h-5 rounded-full border border-gray-500 ${
                    selectedOption === option ? 'bg-[#0086FF]' : ''
                  }`}
                />

              </View>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={tw`bg-[#0086FF] py-3 rounded-lg mb-6`}
          onPress={() => navigation.push('/(tabs)/home')}
        >
          <Button text="Halaman Selanjutnya" bgColor="bg-[#0086FF]" rute="/(tabs)/home"></Button>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>    );
};

export default pilih;