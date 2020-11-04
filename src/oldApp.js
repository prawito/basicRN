import React, {Component, useState} from 'react';
import {ScrollView, Text, Button} from 'react-native';
import BasicComponent from './BasicComponent';

class Car extends Component {
  state = {
    warna: 'merah',
  };

  componentDidMount() {
    console.log('Halo Did Mount');
    setTimeout(() => {
      // call API
      this.setState({
        warna: 'hitam',
      });
    }, 2000);
    // stomp.subscribe({}, (msg) => {
    //   // lari kesini
    //   // lakukan call API ke Bursa Saham
    //   // rubah state
    // })
  }

  componentDidUpdate() {
    console.log('component telah di rubah');
  }

  componentWillUnmount() {
    console.log('component akan hilang');
  }

  render() {
    return (
      <>
        <Text>Ini mobil Saya Warna {this.state.warna}</Text>
        <Text>Ukurannya {this.props.ukuran} meter persegi</Text>
      </>
    );
  }
}

class App extends Component {
  state = {
    show: true,
    size: 30,
  };

  render() {
    return (
      <ScrollView>
        {this.state.show && <Car ukuran={this.state.size} />}
        <Button
          title="toggle Car"
          onPress={() => this.setState({show: !this.state.show})}
        />
        <Button
          title="tambah ukuran mobil"
          onPress={() => this.setState({size: this.state.size + 1})}
        />
      </ScrollView>
    );
  }
}

export default App;
