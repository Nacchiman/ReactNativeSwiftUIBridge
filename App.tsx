/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Scamon from './src/components/Scamon/Scamon';
import ScanList from './src/components/ScanList/ScanList';
import SimpleView from './src/components/SimpleView';

function App(): React.JSX.Element {
  const [isSimpleView, setIsSimpleView] = useState(false);
  const [viewKey, setViewKey] = useState(Math.random().toString());
  const [selectedModelPath, setSelectedModelPath] = useState<string | null>(
    null,
  );

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
      ) : selectedModelPath ? (
        <Scamon modelPath={selectedModelPath} />
      ) : (
        <View style={styles.centeredView}>
          <ScanList onModelSelect={setSelectedModelPath} />
          <View style={styles.textAndButton}>
            <Button
              title="Scan"
              onPress={() => {
                setIsSimpleView(!isSimpleView);
              }}
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textAndButton: {
    marginBottom: 50,
  },
});

export default App;
