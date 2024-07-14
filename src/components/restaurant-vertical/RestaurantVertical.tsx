import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Restaurants } from '@/types/restaurants';
import { FlatList } from 'react-native-gesture-handler';
import RestaurantItem from './restaurant-item/RestaurantItem';

const RestaurantVertical = () => {
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
    <View className='flex gap-4 w-full'>
      {restaurants.map(restaurant => (<RestaurantItem {...restaurant}/>))}
    </View>
  );
};

export default RestaurantVertical;
