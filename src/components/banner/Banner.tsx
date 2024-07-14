import { View, Text, Pressable, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

import React from 'react';

const Banner = () => {
  return (
    <View className="flex w-full h-36 md:h-60 rounded-2xl mt-5 mb-4 overflow-hidden">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          className="flex-1"
          key="1"
          onPress={() => console.log('banner 1')}
        >
          <Image
            source={require('../../assets/banner1.png')}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>

        <Pressable
          className="flex-1"
          key="2"
          onPress={() => console.log('banner 2')}
        >
          <Image
            source={require('../../assets/banner2.png')}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>
      </PagerView>
    </View>
  );
};

export default Banner;
