import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const Search = () => {
  return (
    <View className="flex items-center gap-2 flex-row my-4 bg-slate-200  h-14 px-4 rounded-full border border-slate-500 solid">
      <Feather name="search" size={24} color="#64748b" />
      <TextInput
        placeholder="Procure sua comida..."
        className="flex-1 h-full"
      />
    </View>
  );
};

export default Search;
