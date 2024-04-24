/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import SimpleView from './src/components/SimpleView';

function App(): React.JSX.Element {
  const [isSimpleView, setIsSimpleView] = useState(false);
  const [viewKey, setViewKey] = useState(Math.random().toString());
  return (
    <>
      {isSimpleView ? (
        <SimpleView
          key={viewKey}
          onPressed={() => {
            setIsSimpleView(!isSimpleView);
            setViewKey(Math.random().toString());
          }}
        />
      ) : (
        <View style={styles.centeredView}>
          <Text>This is React View.</Text>
          <Button
            title="Toggle View"
            onPress={() => {
              setIsSimpleView(!isSimpleView);
            }}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
