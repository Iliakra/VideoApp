/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Image, TextInput, Button} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {RNCamera} from 'react-native-camera';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.body}>
        <RNCamera
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <Image style={styles.image} source={require('images/mask-new1.png')} />
        <View style={styles.container}>
          <TextInput
            style={{
              height: 35,
              width: 250,
              borderColor: 'gray',
              borderWidth: 1,
              left: 10,
            }}
            placeholder="Название файла"
          />
          <Button title="Сохранить" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    width: 420,
    height: 650,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 550,
    color: 'black',
  },
});

export default App;
