import React from 'react'
import { View, Text, SectionList } from 'react-native';
import { Header } from '../components/Header';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", ]
    }
];

export const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>

        <SectionList
        ListHeaderComponent={() => <Header title="Section List"/>}
        ListFooterComponent={() => (
            <View style={{marginBottom: 100}}>
                <Header title={"Total de casas: " + casas.length}/>
            </View>
        )}
        keyExtractor={(item, index) => item + index}
        sections={casas}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => (
            <View style={{backgroundColor: 'white'}}>
                <Header title={section.casa}/>
            </View>
        )}
        renderSectionFooter={({section}) => (<Header title={"Total: " + section.data.length}/>)}
        SectionSeparatorComponent={() => <ItemSeparator/>}
        ItemSeparatorComponent={() => <ItemSeparator/>}
        showsVerticalScrollIndicator={false} //Takes away the scroll line
        />
    </View>
  )
}
