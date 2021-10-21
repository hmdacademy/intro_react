import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar, Button } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Appbar>
        <Appbar.BackAction onPress={() => console.log('Back')} />
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="delete" onPress={() => console.log('Delete')} />
      </Appbar>

      <Text style={styles.text}>Open up App.js to start working on your app!</Text>

      <Button icon="plus" mode="contained" style={styles.button} onPress={() => console.log('Insert')}>
        Insert
      </Button>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 20
  },
  button: {
    margin: 20
  },
});
