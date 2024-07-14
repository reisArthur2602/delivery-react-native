import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { Food } from '@/types/food';
import { Ionicons } from '@expo/vector-icons';

const FoodCard = (food: Food) => {
  return (
    <Pressable className="flex flex-col rounded-xl relative">
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />

      <View className="flex items-center justify-center flex-row gap-1 bg-neutral-900/90 rounded-full absolute top-2 right-3 px-2 py-1 ">
        <Ionicons name="star" size={16} color="#ca8a04" />
        <Text className="text-white text-sm font-medium">{food.rating}</Text>
      </View>

      <Text className="text-green-700 font-medium text-lg ">
        RS {food.price}
      </Text>
      <Text className="text-black font-semibold ">{food.name}</Text>
      <Text className="text-neutral-600 mt-1 font-light text-sm">
        {food.time} - {food.delivery}
      </Text>
    </Pressable>
  );
};

export default FoodCard;
