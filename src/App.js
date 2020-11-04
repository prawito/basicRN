import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TouchableNativeFeedback, Button} from 'react-native';
import {imgURI} from './assets/imgURI';
import Photo from './components/Photo';

const Hitung = (props) => {
  const [number, setNumber] = useState(0);

  const hitungNumber = (params) => {
    const newValue = number + 1;
    // ini comment
    props.onHitungChange(newValue)
    return setNumber(newValue);
  }
    return (
      <TouchableNativeFeedback onPress={() => hitungNumber(2)}>
      <Text>Tekan Saya untuk menghitung</Text>
    </TouchableNativeFeedback>
    )
}


const Card = (props) => {
  return (
      <View style={{borderWidth: 1, padding: 16, marginHorizontal: 12}}>
        <Text>{props.title}</Text>
        <Text>{props.address}</Text>
        <Text>{props.phoneNumber}</Text>
        <Hitung onHitungChange={(value) => props.onCardChange(value)} />
      </View>
  )
}






const Product = (props) => {
  const [film, setFilm] = useState(0);

  const addFilm = () => {
    const newValue = film + 1;
    props.onProductClick(newValue)
    setFilm(newValue)
  }

  return( 
    <View style={{maxWidth: 100, borderWidth: 1}}>
      <Image source={{uri: props.img}} style={{width: 100, height: 100}} />
      <Text>Film {props.title} {film}</Text>
      <Button title="add to cart" onPress={addFilm} />
    </View>
  )
}

const App = () => {
  const [number, setNumber] = useState(0);

  const hitungTotalPembelian = (kirimanValueDariProduct) => {
    const result = number + kirimanValueDariProduct;
    setNumber(result)
  }

  return (
    <View>
      <Product title="avatar" img={imgURI.img1} onProductClick={(value) => hitungTotalPembelian(value)} />
      <Product title="ang" img={imgURI.img2} onProductClick={(value) => hitungTotalPembelian(value)} />

      <Text style={{marginTop: 300}}>Saya Belanja sebanyak {number}</Text>







      <Text>Hello</Text>
      <Photo penonton={30} title="avatar" img={imgURI.img1} />
      <Photo penonton={number} color="red" title="ang avatar" img={imgURI.img2} />
      <Card onCardChange={(value) => {
        setNumber(value)
      }} title="Prawito Hudoro" address="Cisauk" phoneNumber="08777777" />
      <Text>Card ini sudah di click sebanyak {number} kali</Text>
    </View>
  )
}

export default App;