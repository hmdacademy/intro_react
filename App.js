import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar, Button } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => console.log('Back')} />
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="delete" onPress={() => console.log('Delete')} />
      </Appbar.Header>

      <Text style={styles.text}>Hello world</Text>

      <Button icon="plus" mode="contained" style={styles.button} onPress={() => alert('Insert')}>
        Insert
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
