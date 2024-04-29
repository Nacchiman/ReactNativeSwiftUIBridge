import * as FileSystem from 'expo-file-system';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type ScanListProps = {
  onModelSelect: (modelPath: string) => void;
};

const ScanList = ({onModelSelect}: ScanListProps) => {
  const [folders, setFolders] = useState<string[]>([]);

  const fetchDirectoryContent = async () => {
    try {
      const directoryUri = FileSystem.documentDirectory + 'Scans/';
      const subdirectories = await FileSystem.readDirectoryAsync(directoryUri);
      const foldersWithModels = [];

      for (const subdirectory of subdirectories) {
        const modelsUri = `${directoryUri}${subdirectory}/Models/`;
        const info = await FileSystem.getInfoAsync(modelsUri);

        if (info.exists) {
          const files = await FileSystem.readDirectoryAsync(modelsUri);
          if (files.length > 0) {
            foldersWithModels.push(`${modelsUri}${files[0]}`); // Assuming the first file is the model
          }
        }
      }

      setFolders(foldersWithModels);
      console.warn('Directory content:', foldersWithModels);
    } catch (error) {
      console.error('Failed to read directory', error);
    }
  };

  useEffect(() => {
    console.log('Fetching directory content...');
    fetchDirectoryContent();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={folders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => onModelSelect(item)}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
  },
});

export default ScanList;
