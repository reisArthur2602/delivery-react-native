import { ScrollView, View } from 'react-native';

import Contants from 'expo-constants';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Search from '../components/search/Search';
import Section from '../components/section/Section';
import Trendings from '../components/trendings/Trendings';

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

        <Banner />

        <Search />

        <Section
          name="Comidas em alta"
          label="Veja Mais"
          size="text-2xl"
          action={() => console.log('Comidas em alta')}
        />

        <Trendings />
      </View>
    </ScrollView>
  );
}
