import React from 'react';
import {View, Text, Image} from 'react-native';

const Photo = ({img, title, color, penonton}) => {
  // const props = {
  //   img: '',
  //   title: '',
  //   color: '',
  //   iniAdalahaPropsColor: '',
  // }

  // desctructuring

  // const {img, title, color} = props;

  return (
    <View style={{marginBottom: 12}}>
      <Image source={{uri: img}} style={{width: 100, height: 100}} />
      <Text style={{fontSize: 18, color: color || 'black'}}>{title}-{penonton}</Text>
    </View>
  )
}

export default Photo;