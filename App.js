import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar, Button } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => alert('back')} />
        <Appbar.Content title="HMD Academy" />
        <Appbar.Action icon="delete" onPress={() => alert('Delete')} />
        <Appbar.Action icon="map-marker" onPress={() => alert('Tambah')} />
      </Appbar.Header>

      <Text style={styles.text}>Hello world</Text>

      <Button icon="cursor-default" mode="contained" style={styles.button} onPress={() => alert('Insert')}>
        Click Me
      </Button>

      <Button icon="camera" mode="contained" style={{margin:20, backgroundColor:'red'}} onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
    fontSize: 30
  },
  button: {
    margin: 20
  },
});