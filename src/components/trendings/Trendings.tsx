import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import FoodCard from './food-card/Food';
import { Food } from '@/types/food';

const Trendings = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  const fetchFoods = async () => {
    const response = await fetch('http://192.168.0.103:3000/foods');
    const data = await response.json();
    setFoods(data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <FoodCard {...item} key={item.id} />}
      horizontal
      contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Trendings;
