import React from 'react';
import {View, FlatList} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {Header} from '../components/Header';
import { ItemSeparator } from '../components/ItemSeparator';
import {menuItems} from '../data/menuItems';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        ListHeaderComponent={() => <Header title="Opciones del Menú"/>}
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name} //String only. Do .toString() if not.
        ItemSeparatorComponent={() => <ItemSeparator/>}
      />
    </View>
  );
};
