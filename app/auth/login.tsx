import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Button from '@/components/Button'
import Button2 from '@/components/button2'
import { Link } from 'expo-router'
const login = () => {
  return (



      <SafeAreaView style={tw`p-4 bg-[#1e1e1e] flex-1`}>
        <View style={tw`flex-1 items-center justify-center`}>
            
          <View style={tw`w-full`}>
          <Image source={require('@/assets/images/icon2.png')} style={tw`w-40 h-10 mb-1`} />

             <TextInput
              style={tw`bg-transparent border border-white rounded-lg p-4 mb-4`}
              placeholder="Email"
              placeholderTextColor="white"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={tw`bg-transparent border border-white rounded-lg p-4 mb-4`}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry
            />

            <View style={tw`flex-row items-center mb-4`}>
              <TouchableOpacity style={tw`flex-row items-center`}>
                <View style={tw`w-5 h-5 border border-white rounded mr-2`} />
                <Text style={tw`text-white`}>Ingat saya</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`ml-auto`}>
                <Text style={tw`text-blue-500`}>Lupa Password?</Text>
              </TouchableOpacity>
            </View>
            
            <Button text='Masuk' bgColor='bg-blue-500 mt-4 w-95 p-4 self-center' rute='/auth/pilih'></Button>

            <TouchableOpacity style={tw`mt-4 items-center`}>
              <Text style={tw`text-white`}>Belum punya akun? 
                <Link href="/auth/register"><Text style={tw`text-blue-500`}>Daftar dulu</Text></Link></Text>
            </TouchableOpacity>          

            <View style={tw`mt-6 items-center`}>

              <View style={tw`flex-row items-center mb-4 mt-5`}>
                <View style={tw`flex-1 h-[1px] bg-white`} />
                <Text style={tw`text-white mx-2`}>Atau Masuk Dengan</Text>
                <View style={tw`flex-1 h-[1px] bg-white`} />
              </View>

              <View style={tw`space-x-4`}>
                <View style={tw`mt-5`}>
                <Button2 text='Masuk Dengan Goggle' img={require('@/assets/images/google.png')} ></Button2>
                </View>
                <View style={tw`mt-3`}>

                <Button2 text='Masuk Dengan Facebook' img={require('@/assets/images/facebook.png')}></Button2>
                </View>

              
              </View>
            </View>
            </View>
        </View>
        
      </SafeAreaView>  )
}

export default login