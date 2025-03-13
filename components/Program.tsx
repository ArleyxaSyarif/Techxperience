import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import {Ionicons} from "@expo/vector-icons";

interface CardProps {
    iconName: string;
    iconColor: string;
    label: string;
}

const Program = ({iconName, iconColor, label}: any) => {
    return (

        <View
            style={tw`bg-gray-800 w-32 h-32 rounded-lg border-r-8 border-blue-500 flex items-center justify-center p-3 mx-2`}
        >
            <Ionicons name={iconName} size={36} color={iconColor}/>
            <Text style={tw`text-white text-center mt-3 text-sm`}>{label}</Text>
        </View>    
        );
}

export default Program;