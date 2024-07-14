import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { Restaurants } from '@/types/restaurants';

const RestaurantCard = (restaurant: Restaurants) => {
  return (
    <Pressable className="flex flex-col items-center justify-center">
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />
      <Text className='text-sm mt-2 w-fit text-center leading-4 text-black font-semibold' numberOfLines={2}>{restaurant.name}</Text>
    </Pressable>
  );
};

export default RestaurantCard;
