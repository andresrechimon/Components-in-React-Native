import React, {useState} from 'react'
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
        console.log('Terminamos');
        setRefreshing(false);
        setData('Refreshed :)')
    }, 1500);
  }

  return (
    <ScrollView
    refreshControl={
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        progressViewOffset={10} //This lowers the upgrade wheel
        // progressBackgroundColor="#5856D6" change the color of the spinner disc
        colors={['red', 'yellow', 'blue']} //This changes the color of the arrow in a sequence of red, yellow and blue
        // tintColor="white" Changes the color of the arrow (IOS only)
        // title="refreshing" Puts a title below of the spinner
        />
    }
    >
        <View style={styles.globalMargin}>
            <Header title="Pull To Refresh"/>
            {
                data && <Text style={{fontSize: 50}}>{data}</Text>
            }  
        </View>
    </ScrollView>
  )
}
