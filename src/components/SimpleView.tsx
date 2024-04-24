import React from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  View,
} from 'react-native';
import SimpleNativeView from './SimpleViewNative';
export type SimpleViewProps = {
  title?: string;
  onPressed: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const SimpleView = (props: SimpleViewProps) => {
  return (
    <View style={styles.container}>
      <SimpleNativeView
        title="test"
        onPressed={props.onPressed}
        style={styles.simpleNativeViewStyle}
      />
    </View>
  );
};
export default SimpleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  simpleNativeViewStyle: {
    flex: 1,
  },
});
