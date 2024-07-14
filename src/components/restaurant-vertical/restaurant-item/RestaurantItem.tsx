import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { Restaurants } from '@/types/restaurants';
import { Ionicons } from '@expo/vector-icons';

const RestaurantItem = (restaurant: Restaurants) => {
  return (
    <Pressable className="flex flex-row items-center justify-start gap-2">
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />

      <View>
        <Text className="text-base text-black leading-4 font-bold">
          {restaurant.name}
        </Text>

        <View className="flex flex-row items-center gap-1 ">
          <Ionicons size={14} name="star" color="#ca8a04" />
          <Text>4.5</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;
