import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import {useRouter} from "expo-router";
import Button2 from '@/components/button2'
import Button from '@/components/Button'

const Signin = () => {

    const navigation = useRouter();

    return (
        <SafeAreaView style={tw`p-4 bg-[#1e1e1e] h-full w-full`}>
            <View style={tw`p-4 bg-[#1e1e1e] h-full w-full mt-15`}>
                <Image source={require('@/assets/images/icon2.png')} style={tw`w-40 h-10`}></Image>
                <View style={tw`py-4 w-full`}>
                    <TextInput
                        placeholder='Masukkan Nama Lengkap'
                        style={tw`border border-gray-300 rounded-lg p-3 w-full mb-4 text-white`}
                        placeholderTextColor="#fff"
                    />
                    <TextInput
                        placeholder='Masukkan Email'
                        secureTextEntry
                        style={tw`border border-gray-300 rounded-lg p-3 w-full mb-4 text-white`}
                        placeholderTextColor="#fff"
                    />
                    <TextInput
                        placeholder='Masukkan Password'
                        secureTextEntry
                        style={tw`border border-gray-300 rounded-lg p-3 w-full mb-4 text-white`}
                        placeholderTextColor="#fff"
                    />
                    <TextInput
                        placeholder='Konfirmasi Password'
                        secureTextEntry
                        style={tw`border border-gray-300 rounded-lg p-3 w-full mb-2 text-white`}
                        placeholderTextColor="#fff"
                    />
                    <View>
                        <View style={tw`flex-row items-center mb-4 mt-4`}>
                            <TouchableOpacity style={tw`flex-row items-center`}>
                                <View style={tw`w-5 h-5 border border-white rounded mr-2`} />
                                <Text style={tw`text-white`}>Ingat saya</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`ml-auto`}>
                                <Text style={tw`text-blue-500`}>Lupa Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View>
                <Button text='Masuk' bgColor='bg-blue-500 mt-4 w-80  p-4 self-center' rute='/(tabs)/home'></Button>

                </View>
                <View style={tw`mb-6 flex-row justify-center mt-2`}>
                    <Text style={tw`text-white`}>Punya Akun?</Text><Text style={tw`text-[#4285f4]`}> Masuk Aja!</Text>
                </View>

                <View style={tw`flex-row items-center mb-4 mt-2`}>
                <View style={tw`flex-1 h-[1px] bg-white`} />
                <Text style={tw`text-white mx-2`}>Atau Masuk Dengan</Text>
                <View style={tw`flex-1 h-[1px] bg-white`} />
              </View>


                <View style={tw`mt-5`}>
                <Button2 text='Masuk Dengan Goggle' img={require('@/assets/images/google.png')} ></Button2>
                </View>
                <View style={tw`mt-3`}>

                <Button2 text='Masuk Dengan Facebook' img={require('@/assets/images/facebook.png')}></Button2>
                </View>


            </View>
        </SafeAreaView>
    )
}

export default Signin