import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default function VideoScreen(props) {
  return (
    <>
      <Text>
        <p>{props.state.selected}</p>
        <p>{props.state.name}</p>
        <p>{props.state.surname}</p>
      </Text>
      <View>
        <RNCamera
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <Image
          style={styles.image}
          source={require('./images/mask-new1.png')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    width: 420,
    height: 650,
  },
});
