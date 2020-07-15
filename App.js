/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import useState from 'react';
import {Container, Header, Content, Form, Item, Picker} from 'native-base';
import VideoScreen from './components/VideoScreen';

const App: () => React$Node = () => {
  const [state, setState] = useState({
      selected: undefined,
      name: value,
      surname: value,
  })
  
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                style={{width: 120}}
                placeholder="Select your pharmacy"
                placeholderStyle={{color: '#bfc6ea'}}
                selectedValue={state.selected}
                onValueChange={onValueChange()}>
                <Picker.Item label="Pharmacy 1" value="key0" />
                <Picker.Item label="Pharmacy 2" value="key1" />
                <Picker.Item label="Pharmacy 3" value="key2" />
                <Picker.Item label="Pharmacy 4" value="key3" />
                <Picker.Item label="Pharmacy 5" value="key4" />
              </Picker>
            </Item>
          </Form>
          <View>
            <TextInput
              style={{
                height: 35,
                width: 250,
                borderColor: 'gray',
                borderWidth: 1,
                left: 10,
              }}
              placeholder="Имя"
              onChangeText={(value) => setState({name: value})}
              value={state.name}
            />
            <TextInput
              style={{
                height: 35,
                width: 250,
                borderColor: 'gray',
                borderWidth: 1,
                left: 10,
              }}
              placeholder="Фамилия"
              onChangeText={(value) => this.setState({surname: value})}
              value={state.surname}
            />
            <Button title="Сохранить"
              onClick={(e) => {
                if (typeof(state.name) && typeof(state.surname) === "string") {
                  return <VideoScreen state={state}/>}
                }} />
          </View>
        </Content>
      </Container>
    </>
  );
};



export default App;
