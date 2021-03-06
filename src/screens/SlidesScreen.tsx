import React from 'react';
import {ImageSourcePropType, SafeAreaView, View, Dimensions, Image, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width, height } = Dimensions.get('window')

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const SlidesScreen = () => {

  const renderItem = (item:Slide) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center'
            }}>
                <Image
                source={item.img}
                style={{
                    width: 350,
                    height: 400,
                    resizeMode: 'center'
                }}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.desc}</Text>
            </View>
        )
  }  

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <Carousel
        // ref={c => {this._carousel = c;}}
        data={items}
        renderItem={({item}:any) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subTitle: {
        fontSize: 16
    }
});
