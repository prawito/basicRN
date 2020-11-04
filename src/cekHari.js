import React from 'react';
import {Text} from 'react-native';

export const Hello = function () {
  return <Text>Hello, Terimakasih Telah menyapa</Text>;
};

const cekHari = () => {
  return new Date().getFullYear();
};

export default cekHari;
