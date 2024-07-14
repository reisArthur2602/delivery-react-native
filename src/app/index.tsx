import { ScrollView, View } from 'react-native';

import Contants from 'expo-constants';
import Header from '../components/header/Header';

const statusBartHeight = Contants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBartHeight + 8 }}>
        <Header />
      </View>
    </ScrollView>
  );
}
