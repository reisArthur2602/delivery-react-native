import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Restaurants } from '@/types/restaurants';
import RestaurantCard from './restaurant-card/RestaurantCard';

const TrendingsRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([]);

  const fetchRestaurants = async () => {
    const response = await fetch('http://192.168.0.103:3000/restaurants');
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantCard {...item} key={item.id} />}
      horizontal
      contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default TrendingsRestaurants;
