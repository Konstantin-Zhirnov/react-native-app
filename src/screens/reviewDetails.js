import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import { globalStyles, images, photo } from '../../styles/global'
import Card from '../shared/card'

export default function ReviewDetails({ route }) {

  const rating = route.params.rating
  const img = route.params.img

  return (
    <ImageBackground sourse={require('../../assets/game_bg.png')} style={globalStyles.container}>
      <ScrollView>
        <Card>
          <Text style={styles.title}>{route.params.title}</Text>
          <View>
            <Image source={photo.photos[img]} style={styles.img} />
          </View>
          <Text>{route.params.body}</Text>
          <View style={styles.rating}>
            <Text style={styles.text}>Рейтинг номера:</Text>
            <Image source={images.ratings[rating]} />
          </View>
        </Card>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  text: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  img: {
    width: '100%',
    marginTop: 10
  }
})