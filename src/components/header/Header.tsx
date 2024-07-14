import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View className="w-full flex items-center justify-between flex-row">
      <Pressable className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <Ionicons name="menu" size={24} color="#121212" />
      </Pressable>

      <View className="flex justify-center items-center">
        <Text className="text-slate-800">Localização</Text>
        <View className="flex flex-row items-center gap-1">
          <Feather name="map-pin" size={14} color="#ff0000" />
          <Text className="text-lg font-bold">São Gonçalo</Text>
        </View>
      </View>

      <Pressable className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <Feather name="bell" size={24} color="#121212" />
      </Pressable>
    </View>
  );
};

export default Header;
