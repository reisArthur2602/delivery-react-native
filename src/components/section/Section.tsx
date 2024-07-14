import { View, Text, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';

interface ISection {
  action: () => void;
  name: string;
  size: 'text-lg' | 'text-xl' | 'text-2xl';
  label: string;
}

const Section = ({ name, action, label, size }: ISection) => {
  return (
    
      <View className=" w-full my-4 flex-row items-center justify-between px-4">
        <Text className={`${size} font-semibold self-start`}>{name}</Text>
        <TouchableOpacity onPress={action}>
          <Text>{label}</Text>
        </TouchableOpacity>
      </View>
  
  );
};

export default Section;
